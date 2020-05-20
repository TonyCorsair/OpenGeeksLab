import { all } from "redux-saga/effects";
import authSaga from "./auth";
import postSage from "./attachment";

export default function* rootSaga() {
  yield all([authSaga(), postSage()]);
}
