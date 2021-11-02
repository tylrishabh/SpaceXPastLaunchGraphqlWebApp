import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga/index";
import combineReducers from "./reducer/index";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(combineReducers, {}, applyMiddleware(...middleware)); // {} = enhancers
sagaMiddleware.run(rootSaga);

export default store;
