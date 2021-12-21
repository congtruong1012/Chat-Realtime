import {
  combineReducers,
  configureStore,
  compose,
  applyMiddleware,
  createAction,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import appReducer from "./containers/App/appSlice";
import channelsReducer from "./containers/Features/Channels/channelsSlice";
import rootSaga from "./rootSaga";
import { connectRouter, LOCATION_CHANGE, routerMiddleware } from "connected-react-router";
import { history } from "./utils/history";
import loginReducer from "./containers/Pages/Login/loginSlice";
import chatReducer from "./containers/Features/Chats/chatSlice";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  router: connectRouter(history),
  app: appReducer,
  login: loginReducer,
  channels: channelsReducer,
  chat: chatReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware, routerMiddleware(history)),
});

sagaMiddleware.run(rootSaga);

// then run the saga

export const rootState = store.getState();

export const locationChange = createAction(LOCATION_CHANGE)

export default store;
