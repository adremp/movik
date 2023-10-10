import { fetchMedia } from "@/shared/api";
import { mapMovieDetails } from "@/shared/api/maps";
import { MovieDetails } from "@/shared/api/types/movieDetails";
import { urls } from "@/shared/const";
import { MediaDetailsActions } from "@/stores/mediaDetails";
import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

// export function* fetchVideos({ payload }: PayloadAction<string>) {
//   try {
//     const data: MediaVideoResponse = yield call(
//       fetchMedia,
//       urls.movie(+payload),
//       {}
//     );
//     yield put(
//       MediaDetailsActions.set({ loading: false, videos: data.results })
//     );
//   } catch (error) {
//     if (error instanceof Error) {
//       yield put(MediaDetailsActions.set({ error }));
//     }
//     yield put(
//       MediaDetailsActions.set({
//         error: {
//           message: "Something went wrong",
//           name: "Error",
//         },
//       })
//     );
//   }
// }

export function* fetchMainMedia({ payload }: PayloadAction<string>) {
  try {
    const data: MovieDetails = yield call(fetchMedia, urls.movie(+payload), {
      append_to_response: "videos,credits",
    });
    yield put(
      MediaDetailsActions.set({ loading: false, media: mapMovieDetails(data) })
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
  yield takeEvery(MediaDetailsActions.fetchVideos.type, fetchMainMedia);
}
