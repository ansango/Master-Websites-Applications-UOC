import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../..";
import { initialState } from "./state";
import { getRecipe } from "./thunk";

export const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    likeRecipe: (state, action) => {
      state.likes = state.likes
        ? [...state.likes, action.payload]
        : [action.payload];
    },
    unlikeRecipe: (state, action) => {
      state.likes =
        state.likes && state.likes.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRecipe.pending, (state) => {
        state.status = "loading";
        state.value = null;
      })
      .addCase(getRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.likes = action.payload.likes;
      })
      .addCase(getRecipe.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { likeRecipe, unlikeRecipe } = recipeSlice.actions;

export const selectRecipe = (state: AppState) => state.recipe.value;
export const selectRecipeAccountId = (state: AppState) =>
  state.recipe.value && state.recipe.value.accountId;
export const selectRecipeAccount = (state: AppState) =>
  state.recipe.value && state.recipe.value.account;
export const selectRecipeStatus = (state: AppState) => state.recipe.status;
export const selectRecipeLikes = (state: AppState) => state.recipe.likes;
export const selectRecipeId = (state: AppState) =>
  state.recipe.value && state.recipe.value._id;
export const selectRecipeComments = (state: AppState) => state.recipe.comments;

export default recipeSlice.reducer;
