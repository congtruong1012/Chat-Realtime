import { call, takeLatest, put } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailed } from "./loginSlice";
import { post } from "../../../api/method";
import { listApiUsers } from "../../../constants/routesApi";
import { push } from "connected-react-router";
function* loginApi({ payload }) {
  try {
    const res = yield call(post, listApiUsers.login, payload);
    if (res.status === 200) {
      yield put(loginSuccess());
      yield put(push("/"));
    }
  } catch (error) {
    yield put(loginFailed(error));
  }
}

export default function* login() {
  yield takeLatest(loginRequest.type, loginApi);
}
