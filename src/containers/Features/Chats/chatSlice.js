import { createSlice } from "@reduxjs/toolkit";

const chat = createSlice({
  name: "slice",
  initialState: {
    user: null,
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {
    getMessages: (state, action) => {
      state.isLoading = true;
      state.user = action.payload;
      state.data = [];
    },
    getMessagesSuccess: (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    getMessagesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

export const { getMessages, getMessagesSuccess, getMessagesFailed } =
  chat.actions;
export default chat.reducer;
