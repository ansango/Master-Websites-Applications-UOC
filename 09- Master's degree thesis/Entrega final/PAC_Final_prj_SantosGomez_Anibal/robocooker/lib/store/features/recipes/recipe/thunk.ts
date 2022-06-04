import { onGetRecipeByIdService } from "@/services/recipes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRecipe = createAsyncThunk(
  "recipe/getRecipe",
  async (id: RecipeId) => {
    const response = await onGetRecipeByIdService(id);
    return response;
  }
);
