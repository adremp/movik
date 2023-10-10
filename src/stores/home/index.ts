import { Media } from "@/shared/api/types";
import createActions from "@/shared/utils/createActions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type MediaDataType = {
  title: string;
  data: Media[];
};

export interface HomeState {
  carouselData?: MediaDataType[];
}

const initialState: HomeState = {};

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
