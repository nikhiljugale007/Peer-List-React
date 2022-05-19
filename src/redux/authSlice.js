import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PostApi2 } from "../apicalls/PostApi";

const initialState = {
  user: {},
  isLoggedIn: false,
  token: "",
  userPosts: [],
};

export const bookmarkPost = createAsyncThunk("post/bookmarkPost", ({ _id }) => {
  return PostApi2(`/api/users/bookmark/${_id}`, {}, true)
    .then((res) => res.data)
    .catch((err) => err.message);
});
export const removeBookmarkPost = createAsyncThunk(
  "post/bookmarkPost",
  ({ _id }) => {
    return PostApi2(`/api/users/remove-bookmark/${_id}`, {}, true)
      .then((res) => res.data)
      .catch((err) => err.message);
  }
);

export const followUnFollowUserUserThunk = createAsyncThunk(
  "/user/followUnFollowUser",
  ({ userId, type }) => {
    const apiUrl =
      type === "follow"
        ? `/api/users/follow/${userId}`
        : `/api/users/unfollow/${userId}`;
    return PostApi2(apiUrl, {}, true)
      .then((res) => res.data)
      .catch((err) => err.message);
  }
);

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
  extraReducers: {
    // bookmark reducer
    [bookmarkPost.fulfilled]: (state, action) => {
      state.user.bookmarks = action.payload.bookmarks;
    },
    [bookmarkPost.rejected]: (state, action) => {
      alert("Error = " + action.payload.error);
    },
    //remove bookmark reducer

    [removeBookmarkPost.fulfilled]: (state, action) => {
      state.user.bookmarks = action.payload.bookmarks;
    },
    [removeBookmarkPost.rejected]: (state, action) => {
      alert("Error = " + action.payload.error);
    },

    //follow/unfollow user
    [followUnFollowUserUserThunk.fulfilled]: (state, action) => {
      state.user = action.payload.user;
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
