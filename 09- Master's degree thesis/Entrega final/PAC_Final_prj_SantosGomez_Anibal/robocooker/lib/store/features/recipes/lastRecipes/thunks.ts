import { onGetLastRecipesService } from "@/services/recipes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getLastRecipes = createAsyncThunk(
  "lastRecipes/getLastRecipes",
  async (limit: number) => {
    const response = await onGetLastRecipesService(limit);
    return response;
  }
);
