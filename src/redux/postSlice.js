import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  feed: [],
};

const postSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeed: (state, action) => {
      state.feed = action.payload.feed;
    },
  },
});

export const { setFeed } = postSlice.actions;
export default postSlice.reducer;
