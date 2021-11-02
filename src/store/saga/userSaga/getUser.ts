import { delay, put } from "redux-saga/effects";
import { GET_INFO_ABOUT_SPACEX } from "../../../graphql/queries/getUserQueries";
import { mutationOrQueryProvider } from "../../../graphql/index";
import { setUsers } from "../../action/userAction";

export function* handleGetUser(): any {
  yield delay(1000);

  const res = yield mutationOrQueryProvider(GET_INFO_ABOUT_SPACEX, {
    limit: 10,
  });
  yield put(setUsers(res));
  try {
  } catch (error) {
    console.log(error);
  }
}
