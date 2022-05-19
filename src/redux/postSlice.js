import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DeleteApi2 } from "../apicalls/DeleteApi";
import { GetApi2 } from "../apicalls/GetApi";
import { PostApi2 } from "../apicalls/PostApi";
const initialState = {
  feed: [],
  status: "idle",
  error: null,
};
export const loadPosts = createAsyncThunk("feed/loadPosts", () => {
  return GetApi2("/api/posts/", false)
    .then((res) => res.data)
    .catch((err) => err.message);
});

export const likePost = createAsyncThunk("post/likePost", ({ _id }) => {
  return PostApi2(`/api/posts/like/${_id}`, {}, true)
    .then((res) => res.data)
    .catch((err) => err.message);
});

export const dislikePost = createAsyncThunk("post/likePost", ({ _id }) => {
  return PostApi2(`/api/posts/dislike/${_id}`, {}, true)
    .then((res) => res.data)
    .catch((err) => err.message);
});

export const deletePostThunk = createAsyncThunk("post/likePost", ({ _id }) => {
  return DeleteApi2(`/api/posts/${_id}`, {}, true)
    .then((res) => res.data)
    .catch((err) => err.message);
});

export const addNewPostThunk = createAsyncThunk(
  "post/newPost",
  ({ newPost }) => {
    return PostApi2("/api/posts", { postData: { ...newPost } }, true)
      .then((res) => res.data)
      .catch((err) => err.message);
  }
);
export const editPostThunk = createAsyncThunk(
  "post/edit",
  ({ _id, newPost }) => {
    return PostApi2(
      `/api/posts/edit/${_id}`,
      { postData: { ...newPost } },
      true
    )
      .then((res) => res.data)
      .catch((err) => err.message);
  }
);
const postSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    setFeed: (state, action) => {
      state.feed = action.payload.feed;
    },
  },
  extraReducers: {
    //get posts reducer
    [loadPosts.pending]: (state) => {
      state.status = "loading";
    },
    [loadPosts.fulfilled]: (state, action) => {
      state.feed = action.payload.posts;
      state.status = "fulfilled";
    },
    [loadPosts.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload.error;
    },

    //like post reducer
    [likePost.fulfilled]: (state, action) => {
      state.feed = action.payload.posts;
    },
    [likePost.rejected]: (state, action) => {
      alert("Error = " + action.payload.error);
    },

    //dislike post reducer

    [dislikePost.fulfilled]: (state, action) => {
      state.feed = action.payload.posts;
    },
    [dislikePost.rejected]: (state, action) => {
      alert("Error = " + action.payload.error);
    },

    //delete post
    [deletePostThunk.fulfilled]: (state, action) => {
      state.feed = action.payload.posts;
      // setFeed({ feed: action.payload.posts });
    },

    //new post
    [addNewPostThunk.fulfilled]: (state, action) => {
      state.feed = action.payload.posts;
    },

    //edit post
    [editPostThunk.fulfilled]: (state, action) => {
      state.feed = action.payload.posts;
    },
  },
});

export const { setFeed } = postSlice.actions;
export default postSlice.reducer;
