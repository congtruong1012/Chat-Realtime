import { createSlice } from "@reduxjs/toolkit";

const channels = createSlice({
  name: "channels",
  initialState: {
    isLoading: true,
    channels: [],
    error: {},
  },
  reducers: {
    getChannel: (state, action) => {
      state.isLoading = true;
    },
    getChannelSuccess: (state, action) => {
      state.isLoading = false;
      state.channels = action.payload;
    },
    getChannelFailed: (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    },
  },
});

const {reducer, actions} = channels

const {getChannel, getChannelSuccess, getChannelFailed} = actions

export { getChannel, getChannelSuccess, getChannelFailed };

export default reducer
