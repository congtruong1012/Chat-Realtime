import { call, put, takeLatest } from "redux-saga/effects";
import { get, post } from "../../../api/method";
import { listApiMessages } from "../../../constants/routesApi";
import {
  getMessages,
  getMessagesFailed,
  getMessagesSuccess,
  saveMessage,
  saveMessageFail,
  saveMessageSucess,
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

function* saveMessageApi({ payload }) {
  try {
    const resp = yield call(post, listApiMessages.save, payload);
    if (resp.status === 200) {
      yield put(saveMessageSucess(resp.data));
    }
  } catch (error) { 
    yield put(saveMessageFail(error));
  }
}

export default function* messageSaga() {
  yield takeLatest(getMessages.type, getMessageApi);
  yield takeLatest(saveMessage.type, saveMessageApi);
}
