import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoggedIn: false,
  token: "",
  userPosts: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoggedUser: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.foundUser;
      state.token = action.payload.encodedToken;
    },
    logoutUser: (state) => {
      state.isLoggedIn = false;
    },
    updateUserPosts: (state, action) => {
      state.userPosts = action.payload.posts;
    },
    updateUserBookmarks: (state, action) => {
      console.log(action.payload);
      state.user.bookmarks = action.payload.bookmarks;
    },
  },
});

export const {
  setLoggedUser,
  logoutUser,
  updateUserPosts,
  updateUserBookmarks,
} = authSlice.actions;
export default authSlice.reducer;
