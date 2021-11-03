import { takeEvery } from "redux-saga/effects";
import { GET_SPACEX } from "../../action/spacexAction";
import { handleGetSpacex } from "./getSpacex";

const userSagas = [takeEvery(GET_SPACEX, handleGetSpacex)];

export default userSagas;
