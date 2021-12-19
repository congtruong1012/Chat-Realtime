import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../../../api/method";
import { listApiUsers } from "../../../constants/routesApi";
import {
  getChannel,
  getChannelSuccess,
  getChannelFailed,
} from "./channelsSlice";

function* getChannelsApi() {
  try {
    const res = yield call(get, listApiUsers.users);
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
