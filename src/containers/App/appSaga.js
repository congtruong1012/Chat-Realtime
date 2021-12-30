import { call, put, takeLatest } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { get } from '../../api/method';
import { listApiUsers } from '../../constants/routesApi';
import { checkToken, checkTokenSuccess, checkTokenFailed } from './appSlice';
import { loginSuccess } from '../Pages/Login/loginSlice';

function* getCheckTokenApi() {
  try {
    const res = yield call(get, listApiUsers.checkToken);
    if (res.status === 200) {
      yield put(loginSuccess());
      yield put(checkTokenSuccess(res.data));
    }
  } catch (error) {
    yield put(checkTokenFailed(error));
    yield put(push('/login'));
  }
}

export default function* appSaga() {
  yield takeLatest(checkToken.type, getCheckTokenApi);
}
