import { AppState } from "../../../";
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import { getFavorites } from "./thunks";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    removeFavorite: (state, action) => {
      state.value = state.value.filter(({ _id }) => _id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFavorites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getFavorites.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getFavorites.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { removeFavorite } = favoritesSlice.actions;

export const selectFavorites = (state: AppState) => state.favorites.value;
export const selectFavoritesStatus = (state: AppState) =>
  state.favorites.status;
export default favoritesSlice.reducer;
