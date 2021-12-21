import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
  name: "login",
  initialState: {
    isLoading: false,
    isLogin: false,
    error: "",
  },
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isLogin = true;
    },
    loginFailed: (state) => {
      state.isLogin = false;
      state.isLoading = false;
      state.error = "Login failed";
    },

    logout: () => {},
    logoutSuccess: (state) => {
      state.isLogin = false;
    },
    logoutFailed: (state, action) => {
      state.error = action.payload.message;
    },
  },
});
const { actions, reducer } = login;
const {
  loginRequest,
  loginSuccess,
  loginFailed,
  logout,
  logoutSuccess,
  logoutFailed,
} = actions;
export {
  loginRequest,
  loginSuccess,
  loginFailed,
  logout,
  logoutSuccess,
  logoutFailed,
};
export default reducer;
