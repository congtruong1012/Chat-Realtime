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
  },
});
const { actions, reducer } = login;
const { loginRequest, loginSuccess, loginFailed } = actions;
export { loginRequest, loginSuccess, loginFailed };
export default reducer;
