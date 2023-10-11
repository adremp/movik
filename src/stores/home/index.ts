import createActions from "@/shared/utils/createActions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HomeState {
  mediaExpanded: boolean;
  mediaScrollTop: number;
}

const initialState: HomeState = { mediaExpanded: false, mediaScrollTop: 0 };

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
