import { call, put, takeLatest } from 'redux-saga/effects';
import { get } from '../../../api/method';
import { listApiChannels } from '../../../constants/routesApi';
import {
  getChannel,
  getChannelSuccess,
  getChannelFailed,
} from './channelsSlice';

function* getChannelsApi({ payload }) {
  try {
    const res = yield call(get, listApiChannels.get, {
      userId: payload?.userId || '',
    });
    if (res.status === 200) {
      yield put(getChannelSuccess(res.data));
    }
  } catch (error) {
    yield put(getChannelFailed(error));
  }
}

export default function* channelsSaga() {
  yield takeLatest(getChannel.type, getChannelsApi);
}
