import { all } from "redux-saga/effects";
import appSaga from "./containers/App/appSaga";
import channelsSaga from "./containers/Features/Channels/channelsSaga";
import loginSaga from "./containers/Pages/Login/loginSaga";

export default function* rootSaga() {
  yield all([appSaga(), loginSaga(), channelsSaga()]);
}