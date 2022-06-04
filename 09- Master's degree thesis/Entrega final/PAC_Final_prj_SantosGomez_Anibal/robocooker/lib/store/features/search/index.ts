import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "../..";
import { initialState } from "./state";
import { search } from "./thunks";

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.status = "loading";
      })
      .addCase(search.fulfilled, (state, action) => {
        state.status = "idle";
        state.results = action.payload;
      })
      .addCase(search.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { setQuery } = searchSlice.actions;
export const selectSearchResults = (state: AppState) => state.search.results;
export const selectSearchQuery = (state: AppState) => state.search.query;
export const selectSearchStatus = (state: AppState) => state.search.status;

export default searchSlice.reducer;
