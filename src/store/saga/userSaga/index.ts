import { takeEvery } from "redux-saga/effects";
import { GET_USERS } from "../../action/userAction";
import { handleGetUser } from "../userSaga/getUser";

const userSagas = [takeEvery(GET_USERS, handleGetUser)];

export default userSagas;
