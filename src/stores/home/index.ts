import { ParamTypes } from "@/shared/api/const";
import { Media, MediaResponse } from "@/shared/api/types";
import createActions from "@/shared/utils/createActions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HomeState {
  animViewType: "default" | "expanded" | "full";
  mediaScrollTop: number;
  fullViewParamType?: ParamTypes;
  fullViewMediaResponse: MediaResponse<Media[]>;
  fullViewLoading: boolean;
  fullViewErrorMessage?: string;
}

const initialState: HomeState = {
  animViewType: "default",
  mediaScrollTop: 0,
  fullViewLoading: false,
	fullViewMediaResponse: {page: 0, results: [], total_pages: 0}
};

export const { actions: HomeActions, reducer: HomeReducer } = createSlice({
  name: "Home",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
    fetchFullViewMedia: (
      state,
      { payload }: PayloadAction
    ) => {
      state.fullViewLoading = true;
      state.fullViewErrorMessage = undefined;
    },
  },
});
export const useHomeActions = createActions(HomeActions);
