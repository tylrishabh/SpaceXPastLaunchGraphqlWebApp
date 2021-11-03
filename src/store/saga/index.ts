import { all } from "redux-saga/effects";
import userSagas from "./spacexSaga/index";

export const tasks = [...userSagas];

function* rootSaga() {
  yield all(tasks);
}

export default rootSaga;
