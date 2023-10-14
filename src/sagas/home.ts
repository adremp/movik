import { Media, MediaResponse } from "@/shared/api/types";
import { HomeActions, HomeState } from "@/stores/home";
import { call, put, select, takeEvery } from "redux-saga/effects";

const fetchApi = (route: string, query: Record<string, string>) =>
  fetch(`/api/${route}?${new URLSearchParams(query)}`).then(async (res) => {
    const ret = await res.json();
    if (!res.ok) {
      return Promise.reject({
        status: res.status,
        message: ret.message,
      });
    }
    return ret;
  });

export function* fetchMediaList() {
  const {
    fullViewMediaResponse,
    fullViewParamType,
  }: Pick<HomeState, "fullViewMediaResponse" | "fullViewParamType"> =
    yield select((s) => ({
      fullViewParamType: s.home.fullViewParamType,
      fullViewMediaResponse: s.home.fullViewMediaResponse,
    }));
  if (!fullViewParamType) return;
  try {
    const data: MediaResponse<Media[]> = yield call(fetchApi, "media", {
      type: fullViewParamType,
      page: `${fullViewMediaResponse.page + 1}`,
    });
    yield put(
      HomeActions.set({
        fullViewLoading: false,
        fullViewMediaResponse: {
          ...data,
          results: [...fullViewMediaResponse.results, ...data.results],
        },
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(HomeActions.set({ fullViewErrorMessage: error.message }));
    }
    yield put(
      HomeActions.set({
        fullViewErrorMessage: "Something went wrong",
      })
    );
  }
}

export function* homeVatcher() {
  yield takeEvery(HomeActions.fetchFullViewMedia, fetchMediaList);
}
