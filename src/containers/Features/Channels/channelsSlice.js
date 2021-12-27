import { createSlice } from "@reduxjs/toolkit";

const channels = createSlice({
  name: "channels",
  initialState: {
    isLoading: true,
    channels: [],
    error: {},
  },
  reducers: {
    getChannel: (state) => {
      state.isLoading = true;
      state.channels = [];
    },
    getChannelSuccess: (state, action) => {
      state.isLoading = false;
      state.channels = action.payload;
    },
    getChannelFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
    updateChannel: (state, action) => {
      state.channels.push(action.payload);
    },
  },
});

const { reducer, actions } = channels;

const { getChannel, getChannelSuccess, getChannelFailed, updateChannel } =
  actions;

export { getChannel, getChannelSuccess, getChannelFailed, updateChannel };

export default reducer;
