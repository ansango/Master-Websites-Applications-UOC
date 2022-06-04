import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../../..";
import { initialState } from "./state";
import { getLastRecipes } from "./thunks";
export const lastRecipesSlice = createSlice({
  name: "lastRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLastRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getLastRecipes.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getLastRecipes.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const selectLastRecipes = (state: AppState) => state.lastRecipes.value;
export const selectLastRecipesStatus = (state: AppState) =>
  state.lastRecipes.status;
export default lastRecipesSlice.reducer;
