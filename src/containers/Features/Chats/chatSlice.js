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
    updateStatusUser: (state, action) => {
      Object.assign(state.user || {}, action.payload);
    },

    saveMessage: () => {},
    saveMessageSucess: (state, action) => {
      state.data.push(action.payload);
    },
    saveMessageFail: (state, action) => {
      state.error = action.payload.message;
    },
  },
});

export const {
  getMessages,
  getMessagesSuccess,
  getMessagesFailed,
  resetMessage,
  updateMessages,
  updateStatusUser,
  saveMessage,
  saveMessageSucess,
  saveMessageFail,
} = chat.actions;
export default chat.reducer;
