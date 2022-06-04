import { Ingredient, RecipeDAO, Step } from "@/models/recipe/recipe";
import {
  onGetMyRecipesService,
  onPostRecipeService,
  onUpdateBasicInfoRecipeService,
  onUpdateImageRecipeService,
  onUpdateCategoriesRecipeService,
  onUpdateIngredientsRecipeService,
  onUpdateStepsRecipeService,
  onDeleteRecipeService,
} from "@/services/recipes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMyRecipes = createAsyncThunk(
  "myRecipes/getMyRecipes",
  async () => {
    const response = await onGetMyRecipesService();
    return response;
  }
);

export const removeMyRecipes = createAsyncThunk(
  "myRecipes/removeMyRecipes",
  async (timing?: number) => {
    return new Promise<void>((resolve) =>
      setTimeout(() => resolve(), timing ?? 2000)
    );
  }
);

export const addMyRecipe = createAsyncThunk(
  "myRecipes/addMyRecipe",
  async ({
    recipe,
    file,
    redirect,
  }: {
    recipe: RecipeDAO;
    file: FormData;
    redirect: (id: string) => Promise<boolean>;
  }) => {
    const { _id } = await onPostRecipeService(recipe);
    const response = await onUpdateImageRecipeService(_id, file);
    redirect(response._id);
    return response;
  }
);

export const updateMyPictureRecipe = createAsyncThunk(
  "myRecipes/updateMyPictureRecipe",
  async ({ recipeId, file }: { recipeId: RecipeId; file: FormData }) => {
    const response = await onUpdateImageRecipeService(recipeId, file);
    return response;
  }
);

export const updateMyInfoRecipe = createAsyncThunk(
  "myRecipes/updateMyInfoRecipe",
  async ({
    recipeId,
    name,
    description,
    duration,
    servings,
  }: {
    recipeId: RecipeId;
    name: Name;
    description: Content | string;
    servings: Servings;
    duration: Duration;
  }) => {
    const response = onUpdateBasicInfoRecipeService(recipeId, {
      name,
      description,
      servings,
      duration,
    });
    return response;
  }
);

export const updateMyCategoriesRecipe = createAsyncThunk(
  "myRecipes/updateMyCategoriesRecipe",
  async ({
    recipeId,
    categories,
    blenders,
  }: {
    recipeId: RecipeId;
    categories: CategoryName[];
    blenders: BlenderName[];
  }) => {
    const response = await onUpdateCategoriesRecipeService(
      recipeId,
      categories,
      blenders
    );
    return response;
  }
);

export const updateMyIngredientsRecipe = createAsyncThunk(
  "myRecipes/updateMyIngredientsRecipe",
  async ({
    recipeId,
    ingredients,
  }: {
    recipeId: RecipeId;
    ingredients: Ingredient[];
  }) => {
    const response = await onUpdateIngredientsRecipeService(
      recipeId,
      ingredients
    );
    return response;
  }
);

export const updateMyStepsRecipe = createAsyncThunk(
  "myRecipes/updateMyStepsRecipe",
  async ({ recipeId, steps }: { recipeId: RecipeId; steps: Step[] }) => {
    const response = await onUpdateStepsRecipeService(recipeId, steps);
    return response;
  }
);

export const removeMyRecipe = createAsyncThunk(
  "myRecipes/removeMyRecipe",
  async ({
    id,
    redirect,
  }: {
    id: RecipeId;
    redirect: () => Promise<boolean>;
  }) => {
    await onDeleteRecipeService(id);
    redirect();
    return { _id: id };
  }
);
