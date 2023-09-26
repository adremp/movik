import { fetchMedia } from "@/shared/api";
import { MediaVideoResponse } from "@/shared/api/types";
import { urls } from "@/shared/const";
import { MediaDetailsActions } from "@/stores/mediaDetails";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

export function* fetchVideos({ payload }: PayloadAction<string>) {
  try {
    const data: MediaVideoResponse = yield call(
      fetchMedia,
      urls.mediaVideos(payload),
      {}
    );
    console.log("data :>> ", data);
    yield put(
      MediaDetailsActions.set({ loading: false, videos: data.results })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(MediaDetailsActions.set({ error }));
    }
    yield put(
      MediaDetailsActions.set({
        error: {
          message: "Something went wrong",
          name: "Error",
        },
      })
    );
  }
}

export function* fetchMainMedia() {
  try {
    const data: MediaVideoResponse = yield call(
      fetchMedia,
      urls.,
      {}
    );
    console.log("data :>> ", data);
    yield put(
      MediaDetailsActions.set({ loading: false, videos: data.results })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(MediaDetailsActions.set({ error }));
    }
    yield put(
      MediaDetailsActions.set({
        error: {
          message: "Something went wrong",
          name: "Error",
        },
      })
    );
  }
}

export function* mediaDetailsVatcher() {
  yield takeEvery(MediaDetailsActions.fetchVideos.type, fetchVideos);
}
