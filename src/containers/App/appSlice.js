import { createSlice } from '@reduxjs/toolkit';

const app = createSlice({
  name: 'app',
  initialState: {
    isLoading: false,
    user: {},
    error: {},
  },
  reducers: {
    checkToken: (state) => {
      state.isLoading = true;
    },
    checkTokenSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    },
    checkTokenFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },

    resetUser: (state) => {
      state.user = null;
    },
  },
});

export const selectIsLoading = (state) => state.app.isLoading;
export const selectIsLogin = (state) => state.app.isLogin;

const { reducer, actions } = app;
export const { checkToken, checkTokenSuccess, checkTokenFailed, resetUser } =
  actions;

export default reducer;
