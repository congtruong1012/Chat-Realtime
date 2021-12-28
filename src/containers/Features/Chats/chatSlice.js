import { createSlice } from "@reduxjs/toolkit";

const chat = createSlice({
  name: "chat",
  initialState: {
    user: null,
    isLoading: false,
    data: [],
    channel: null,
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
      state.data = action.payload.data;
      state.channel = action.payload.channel;
    },
    getMessagesFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    resetMessage: (state) => {
      state.data = [];
      state.user = null;
    },
    updateMessages: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const {
  getMessages,
  getMessagesSuccess,
  getMessagesFailed,
  resetMessage,
  updateMessages,
} = chat.actions;
export default chat.reducer;
