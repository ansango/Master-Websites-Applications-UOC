import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  onGetLastRecipesByCategoryService,
  onGetMostCommentedRecipesByCategoryService,
  onGetTrendingRecipesByCategoryService,
} from "@/services/categories";
import {
  onGetLastRecipesByBlenderService,
  onGetMostCommentedRecipesByBlenderService,
  onGetTrendingRecipesByBlenderService,
} from "@/services/blenders";

export const getLastRecipesByCategory = createAsyncThunk(
  "categories/getLastRecipesByCategory",
  async (category: CategoryName) => {
    const recipes = await onGetLastRecipesByCategoryService(category);
    return recipes;
  }
);

export const getMostCommentedRecipesByCategory = createAsyncThunk(
  "categories/getMostCommentedRecipesByCategory",
  async (category: CategoryName) => {
    const recipes = await onGetMostCommentedRecipesByCategoryService(category);
    return recipes;
  }
);

export const getTrendingRecipesByCategory = createAsyncThunk(
  "categories/getTrendingRecipesByCategory",
  async (category: CategoryName) => {
    const recipes = await onGetTrendingRecipesByCategoryService(category);
    return recipes;
  }
);

export const getLastRecipesByBlender = createAsyncThunk(
  "blenders/getLastRecipesByBlender",
  async (blender: BlenderName) => {
    const recipes = await onGetLastRecipesByBlenderService(blender);
    return recipes;
  }
);

export const getMostCommentedRecipesByBlender = createAsyncThunk(
  "blenders/getMostCommentedRecipesByBlender",
  async (blender: BlenderName) => {
    const recipes = await onGetMostCommentedRecipesByBlenderService(blender);
    return recipes;
  }
);

export const getTrendingRecipesByBlender = createAsyncThunk(
  "blenders/getTrendingRecipesByBlender",
  async (blender: BlenderName) => {
    const recipes = await onGetTrendingRecipesByBlenderService(blender);
    return recipes;
  }
);
