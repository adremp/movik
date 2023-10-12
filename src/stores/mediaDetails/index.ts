import createActions from "@/shared/utils/createActions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface MediaDetailsState {}

const initialState: MediaDetailsState = {};

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
      fetchMedia: (state, { payload }: PayloadAction<void>) => {},
    },
  });
export const useMediaDetailsActions = createActions(MediaDetailsActions);
