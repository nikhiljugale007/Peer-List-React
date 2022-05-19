import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import commentSlice from "./commentSlice";
import postSlice from "./postSlice";
export const store = configureStore({
  reducer: {
    authSlice: authSlice,
    postSlice: postSlice,
    commentSlice: commentSlice,
  },
});
