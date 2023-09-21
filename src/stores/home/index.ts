import {
  PayloadAction,
  bindActionCreators,
  createSlice,
} from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { TopRatedMovie } from "./../../shared/api/types";

export interface HomeState {
  contentType: "all" | "show" | "movie" | "favorite";
	backgroundUrl: string
	title: string
	description: string
	yearRaw: string
  movies: TopRatedMovie[];
}

const initialState: HomeState = {
  contentType: "all",
  movies: [],
	title: '',
	backgroundUrl: '',
	description: '',
	yearRaw: ''
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
export const useHomeActions = (): typeof HomeActions => {
  const dispatch = useDispatch();
  return useMemo(() => bindActionCreators(HomeActions, dispatch), []);
};
