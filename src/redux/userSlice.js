import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetApi2 } from "../apicalls/GetApi";

const initialState = {
  recommendedUsers: [],
  recommendedUsersStatus: "idle",
};

export const loadUsers = createAsyncThunk("users/recommended", () => {
  return GetApi2("/api/users/", false)
    .then((res) => res.data)
    .catch((err) => err.message);
});
const userSlice = createSlice({
  name: "recommendedUsers",
  initialState,

  extraReducers: {
    [loadUsers.pending]: (state) => {
      state.recommendedUsersStatus = "pending";
    },
    [loadUsers.fulfilled]: (state, action) => {
      state.recommendedUsers = action.payload.users;
      state.recommendedUsersStatus = "fulfilled";
    },
  },
});

export default userSlice.reducer;
