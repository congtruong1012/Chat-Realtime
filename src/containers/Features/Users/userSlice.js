import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {
    getUsers: (state, action) => {
      state.isLoading = true;
      state.data = [];
    },
    getUsersSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getUsersFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    resetData: (state) => {
      state.data = [];
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersFailed, resetData } =
  user.actions;
export default user.reducer;
