import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../..";

import { initialState } from "./state";
import { getComments, addComment, removeComment } from "./thunk";

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getComments.rejected, (state) => {
        state.status = "failed";
      });
    builder.addCase(addComment.pending, (state) => {
      state.status = "loading";
      state.onAddComment = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = state.value
        ? [...state.value, action.payload]
        : [action.payload];
      state.onAddComment = false;
    });
    builder.addCase(addComment.rejected, (state) => {
      state.status = "failed";
      state.onAddComment = false;
    });
    builder.addCase(removeComment.pending, (state, action) => {
      state.status = "loading";
      state.onRemoveComment = true;
    });
    builder.addCase(removeComment.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = state.value
        ? state.value.filter((comment) => comment._id !== action.payload._id)
        : [];
      state.onRemoveComment = false;
    });
    builder.addCase(removeComment.rejected, (state) => {
      state.status = "failed";
      state.onRemoveComment = false;
    });
  },
});

export const selectComments = (state: AppState) => state.comments.value;
export const selectCommentsStatus = (state: AppState) => state.comments.status;
export const selectOnAddComment = (state: AppState) =>
  state.comments.onAddComment;
export const selectOnRemoveComment = (state: AppState) =>
  state.comments.onRemoveComment;
export default commentsSlice.reducer;
