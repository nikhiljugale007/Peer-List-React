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
    updateUser: (state, action) => {
      state.user = action.payload.user;
    },
    updateUserPosts: (state, action) => {
      state.userPosts = action.payload.posts;
    },
    updateUserBookmarks: (state, action) => {
      state.user.bookmarks = action.payload.bookmarks;
    },
  },
});

export const {
  setLoggedUser,
  logoutUser,
  updateUserPosts,
  updateUserBookmarks,
  updateUser,
} = authSlice.actions;
export default authSlice.reducer;
