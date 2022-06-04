import { onGetFavoritesService } from "@/services/favorites";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getFavorites = createAsyncThunk(
  "favorites/getFavorites",
  async () => {
    const response = await onGetFavoritesService();
    return response;
  }
);
