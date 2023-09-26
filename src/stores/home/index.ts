import createActions from "@/shared/helpers/createActions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Media } from "../types";

export type MediaDataType = {
  title: string;
  data: Media[];
};

export interface HomeState {
  contentType: "all" | "show" | "movie" | "favorite";
  mainMedia?: Media;
  mediaData?: MediaDataType[];
}

const initialState: HomeState = {
  contentType: "all",
};

export const { actions: HomeActions, reducer: HomeReducer } = createSlice({
  name: "Home",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
});
export const useHomeActions = createActions(HomeActions);
