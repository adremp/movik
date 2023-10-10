import { Media } from "@/shared/api/types";
import createActions from "@/shared/utils/createActions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RootState {
  currentMedia?: Media;
}

const initialState: RootState = {};

export const { actions: RootActions, reducer: RootReducer } = createSlice({
  name: "Root",
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<Partial<typeof initialState>>) => ({
      ...state,
      ...payload,
    }),
  },
});
export const useRootActions = createActions(RootActions);
