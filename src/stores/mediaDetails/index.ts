import { Media } from "@/shared/api/types";
import { MediaVideo } from "@/shared/api/types/mediaVideos";
import createActions from "@/shared/utils/createActions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MediaDetailsState {
  media?: Media;
  loading: boolean;
  videos: MediaVideo[];
  error?: Error;
}

const initialState: MediaDetailsState = {
  loading: false,
  videos: [],
};

export const { actions: MediaDetailsActions, reducer: MediaDetailsReducer } =
  createSlice({
    name: "Home",
    initialState,
    reducers: {
      set: (
        state,
        { payload }: PayloadAction<Partial<typeof initialState>>
      ) => ({
        ...state,
        ...payload,
      }),
      fetchVideos: (state, { payload }: PayloadAction<number>) => {
        state.loading = true;
      },
      fetchMedia: (state, { payload }: PayloadAction<void>) => {},
    },
  });
export const useMediaDetailsActions = createActions(MediaDetailsActions);
