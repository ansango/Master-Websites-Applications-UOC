import { onGetTrendingRecipesService } from "@/services/recipes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTrendingRecipes = createAsyncThunk(
  "trending/getTrendingRecipes",
  async (limit: number) => {
    const response = await onGetTrendingRecipesService(limit);
    return response;
  }
);
