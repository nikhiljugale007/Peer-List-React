import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetApi2 } from "../apicalls/GetApi";

const initialState = {
  currentPost: [],
  commentList: [],
  postStatus: "idle",
  commentStatus: "idle",
  sortCommentsBy: "LATEST",
  error: null,
};

export const getPostDetails = createAsyncThunk(
  "/post/:postId",
  ({ post_id }) => {
    return GetApi2(`/api/posts/${post_id}`, false)
      .then((res) => res.data)
      .catch((err) => err.message);
  }
);

export const getCommentsForPost = createAsyncThunk(
  "/post/commets/:postId",
  ({ post_id }) => {
    return GetApi2(`/api/comments/${post_id}`, false)
      .then((res) => res.data)
      .catch((err) => err.message);
  }
);
const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload.currentPost;
    },
    setCommentList: (state, action) => {
      state.commentList = action.payload.commentList;
    },
    setSortCommentsBy: (state, action) => {
      state.sortCommentsBy = action.payload.sortCommentsBy;
    },
  },
  extraReducers: {
    [getPostDetails.pending]: (state, action) => {
      state.postStatus = "pending";
    },
    [getPostDetails.fulfilled]: (state, action) => {
      state.currentPost = action.payload.post;
      state.postStatus = "fulfilled";
    },
    [getPostDetails.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.postStatus = "rejected";
    },

    [getCommentsForPost.pending]: (state) => {
      state.commentStatus = "loading";
    },
    [getCommentsForPost.fulfilled]: (state, action) => {
      state.commentList = action.payload.comments;
      state.commentStatus = "fulfilled";
    },
    [getCommentsForPost.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.commentStatus = "rejected";
    },
  },
});

export const { setCurrentPost, setCommentList, setSortCommentsBy } =
  commentSlice.actions;
export default commentSlice.reducer;
