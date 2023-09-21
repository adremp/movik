import {
  CombinedState,
  DeepPartial,
  Reducer,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { HomeReducer } from "./home";
import { AppState } from "./types";

type CreateStoreParams = {
  initialState?: DeepPartial<AppState>;
};

export const createStore = (params?: CreateStoreParams) => {
  const reducer: Reducer<CombinedState<AppState>> = combineReducers({
    home: HomeReducer,
  });

  return configureStore({ reducer, preloadedState: params?.initialState as AppState });
};

export default createStore();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
