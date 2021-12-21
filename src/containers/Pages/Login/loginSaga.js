import { call, takeLatest, put } from "redux-saga/effects";
import {
  loginRequest,
  loginSuccess,
  loginFailed,
  logoutSuccess,
  logoutFailed,
  logout,
} from "./loginSlice";
import { post, get } from "../../../api/method";
import { listApiUsers } from "../../../constants/routesApi";
import { push } from "connected-react-router";
import { checkTokenSuccess } from "../../App/appSlice";
function* loginApi({ payload }) {
  try {
    const res = yield call(post, listApiUsers.login, payload);
    if (res.status === 200) {
      yield put(checkTokenSuccess(res.data))
      yield put(loginSuccess());
      yield put(push("/"));
    }
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* logoutApi() {
  try {
    const resp = yield call(get, listApiUsers.logout);
    if (resp.status === 200) {
      yield put(logoutSuccess());
      yield put(push("/login"));
    }
  } catch (error) {
    yield put(logoutFailed(error));
  }
}

export default function* login() {
  yield takeLatest(loginRequest.type, loginApi);
  yield takeLatest(logout.type, logoutApi);
}
