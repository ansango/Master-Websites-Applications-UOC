import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../..";
import { initialState } from "./state";
import { getTrendingRecipes } from "./thunks";
const trendingSlice = createSlice({
  name: "trending",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getTrendingRecipes.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "idle";
      })
      .addCase(getTrendingRecipes.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectTrending = (state: AppState) => state.trending.value;

export default trendingSlice.reducer;
