import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../../../api/method";
import { listApiUsers } from "../../../constants/routesApi";
import {
  getUsers,
  getUsersFailed,
  getUsersSuccess,
} from "./userSlice";

function* getMessageApi({ payload }) {
  try {
    const resp = yield call(get, listApiUsers.users, {
      name: payload?.name,
    });

    if (resp.status === 200) {
      yield put(getUsersSuccess(resp.data));
    }
  } catch (error) {
    yield put(getUsersFailed(error));
  }
}

export default function* Usersaga() {
  yield takeLatest(getUsers.type, getMessageApi);
}
