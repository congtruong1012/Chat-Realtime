import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../../../api/method";
import { listApiMessages } from "../../../constants/routesApi";
import {
  getMessages,
  getMessagesFailed,
  getMessagesSuccess,
} from "./chatSlice";
import { updateChannel } from "../Channels/channelsSlice";

function* getMessageApi({ payload }) {
  try {
    const resp = yield call(get, listApiMessages.get, {
      userId: payload?._id,
    });

    if (resp.status === 200) {
      yield put(getMessagesSuccess(resp.data));
    }
    if (resp.status === 201) {
      yield put(updateChannel(resp.data));
    }
  } catch (error) {
    yield put(getMessagesFailed(error));
  }
}

export default function* messageSaga() {
  yield takeLatest(getMessages.type, getMessageApi);
}
