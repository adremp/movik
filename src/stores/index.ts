import { rootSaga } from "@/sagas";
import {
	CombinedState,
	DeepPartial,
	PayloadAction,
	Reducer,
	combineReducers,
	configureStore,
} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { HomeReducer } from "./home";
import { MediaDetailsReducer } from "./mediaDetails";
import { AppState } from "./types";
import { RootReducer } from "./root";

type CreateStoreParams = {
  initialState?: DeepPartial<AppState>;
};



export const createStore = (params?: CreateStoreParams) => {

  const reducer: Reducer<CombinedState<AppState>> = combineReducers({
    home: HomeReducer,
    mediaDetails: MediaDetailsReducer,
		root: RootReducer
  });

  const sagaMiddleware = createSagaMiddleware();

  const store = configureStore({
    reducer,
    preloadedState: params?.initialState as AppState,
    middleware: [sagaMiddleware],
  });

  sagaMiddleware.run(rootSaga);

	return store
};

export default createStore();

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
