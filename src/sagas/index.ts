import { all } from "redux-saga/effects";
import { homeVatcher } from "./home";

export function* rootSaga() {
  yield all([homeVatcher()]);
}
