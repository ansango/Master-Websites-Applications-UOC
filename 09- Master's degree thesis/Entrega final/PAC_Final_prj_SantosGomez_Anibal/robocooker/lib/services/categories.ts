import { RecipeDTO } from "@/models/recipe/recipe";
import { Category } from "lib/models/recipe/category";
import fetcher from "../utils/fetcher";

export const onGetAllCategoriesService = async (): Promise<Category[]> => {
  try {
    const response = await fetcher("/api/categories/all", {
      method: "GET",
    });
    return response.categories;
  } catch (err) {
    throw err;
  }
};

export const onGetLastRecipesByCategoryService = async (
  category: CategoryName
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/category/${category}/last`, {
      method: "GET",
    });
    return response.recipes;
  } catch (err) {
    throw err;
  }
};

export const onGetTrendingRecipesByCategoryService = async (
  category: CategoryName
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/category/${category}/trending`, {
      method: "GET",
    });
    return response.recipes;
  } catch (err) {
    throw err;
  }
};

export const onGetMostCommentedRecipesByCategoryService = async (
  category: CategoryName
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/category/${category}/commented`, {
      method: "GET",
    });
    return response.recipes;
  } catch (err) {
    throw err;
  }
};
