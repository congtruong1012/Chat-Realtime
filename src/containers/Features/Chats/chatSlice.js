import { createSlice } from "@reduxjs/toolkit";

const chat = createSlice({
  name: "chat",
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
    resetMessage: (state) => {
      state.data = [];
      state.user = null;
    },
  },
});

export const {
  getMessages,
  getMessagesSuccess,
  getMessagesFailed,
  resetMessage,
} = chat.actions;
export default chat.reducer;
