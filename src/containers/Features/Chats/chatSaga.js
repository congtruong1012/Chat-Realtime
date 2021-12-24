import { call, put, takeLatest } from "redux-saga/effects";
import { get } from "../../../api/method";
import { listApiMessages } from "../../../constants/routesApi";
import {
  getMessages,
  getMessagesFailed,
  getMessagesSuccess,
} from "./chatSlice";

function* getMessageApi({ payload }) {
  try {
    console.log({
      channelId: payload?.user?.channelId,
    });
    const resp = yield call(get, listApiMessages.get, {
      userId: payload?._id,
    });

    if (resp.status === 200) {
      console.log("function*getMessageApi ~ resp.status", resp.status);
      yield put(getMessagesSuccess(resp.data));
    }
  } catch (error) {
    yield put(getMessagesFailed(error));
  }
}

export default function* messageSaga() {
  yield takeLatest(getMessages.type, getMessageApi);
}
