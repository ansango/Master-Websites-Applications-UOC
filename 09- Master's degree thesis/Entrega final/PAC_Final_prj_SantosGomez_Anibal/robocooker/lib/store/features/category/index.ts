import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../..";
import { initialState } from "./state";
import {
  getLastRecipesByBlender,
  getLastRecipesByCategory,
  getMostCommentedRecipesByBlender,
  getMostCommentedRecipesByCategory,
  getTrendingRecipesByBlender,
  getTrendingRecipesByCategory,
} from "./thunks";

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLastRecipesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLastRecipesByCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.last = action.payload;
      })
      .addCase(getLastRecipesByCategory.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(getTrendingRecipesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTrendingRecipesByCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.trending = action.payload;
      })
      .addCase(getTrendingRecipesByCategory.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(getMostCommentedRecipesByCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMostCommentedRecipesByCategory.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.commented = action.payload;
      })
      .addCase(getMostCommentedRecipesByCategory.rejected, (state) => {
        state.status = "failed";
      });

    builder
      .addCase(getLastRecipesByBlender.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLastRecipesByBlender.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.last = action.payload;
      })
      .addCase(getLastRecipesByBlender.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(getTrendingRecipesByBlender.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTrendingRecipesByBlender.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.trending = action.payload;
      })
      .addCase(getTrendingRecipesByBlender.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(getMostCommentedRecipesByBlender.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMostCommentedRecipesByBlender.fulfilled, (state, action) => {
        state.status = "idle";
        state.value.commented = action.payload;
      })
      .addCase(getMostCommentedRecipesByBlender.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectTrendingRecipes = (state: AppState) =>
  state.category.value.trending;
export const selectLastRecipes = (state: AppState) => state.category.value.last;
export const selectCommentedRecipes = (state: AppState) =>
  state.category.value.commented;
export const selectStatusCategory = (state: AppState) => state.category.status;

export default categorySlice.reducer;
