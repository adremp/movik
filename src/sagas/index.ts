import { all } from "redux-saga/effects";
import { mediaDetailsVatcher } from "./mediaDetails";

export function* rootSaga() {
  yield all([mediaDetailsVatcher()]);
}
