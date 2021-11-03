import { delay, put } from "redux-saga/effects";
import { GET_INFO_ABOUT_SPACEX } from "../../../graphql/queries/getSpacexQueries";
import { mutationOrQueryProvider } from "../../../graphql/index";
import { setSpacexData } from "../../action/spacexAction";

export function* handleGetSpacex(): any {
  yield delay(1000);

  const res = yield mutationOrQueryProvider(GET_INFO_ABOUT_SPACEX, {
    limit: 10,
  });
  yield put(setSpacexData(res));
  try {
  } catch (error) {
    console.log(error);
  }
}
