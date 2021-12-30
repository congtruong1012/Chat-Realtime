import { push } from 'connected-react-router';
import { call, put, takeLatest } from 'redux-saga/effects';
import { get, post } from '../../../api/method';
import { listApiUsers } from '../../../constants/routesApi';
import { checkTokenSuccess, resetUser } from '../../App/appSlice';
import { resetMessage } from '../../Features/Chats/chatSlice';
import {
  loginFailed,
  loginRequest,
  loginSuccess,
  logout,
  logoutFailed,
  logoutSuccess,
} from './loginSlice';

function* loginApi({ payload }) {
  try {
    const res = yield call(post, listApiUsers.login, payload);
    if (res.status === 200) {
      yield put(checkTokenSuccess(res.data));
      yield put(loginSuccess());
      yield put(push('/'));
    }
  } catch (error) {
    yield put(loginFailed(error));
  }
}

function* logoutApi() {
  try {
    const resp = yield call(get, listApiUsers.logout);
    if (resp.status === 200) {
      yield put(resetMessage());
      yield put(resetUser());
      yield put(logoutSuccess());
      yield put(push('/login'));
    }
  } catch (error) {
    yield put(logoutFailed(error));
  }
}

export default function* login() {
  yield takeLatest(loginRequest.type, loginApi);
  yield takeLatest(logout.type, logoutApi);
}
