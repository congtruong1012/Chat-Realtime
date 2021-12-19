import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../../utils/cookie";
const app = createSlice({
  name: "app",
  initialState: {
    isLoading: true,
    isLogin: false,
    user: {},
    error: {},
  },
  reducers: {
    checkToken: (state, action) => {
      state.isLoading = true;
    },
    checkTokenSuccess: (state, action) => {
      setCookie("isLogin", true, 1 * 60 * 1000);
      state.isLoading = false;
      state.isLogin = true;
      state.user = action.payload;
    },
    checkTokenFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const selectIsLoading = (state) => state.app.isLoading;
export const selectIsLogin = (state) => state.app.isLogin;

const { reducer, actions } = app;
export const { checkToken, checkTokenSuccess, checkTokenFailed } = actions;

export default reducer;
