import { RecipeDTO } from "@/models/recipe/recipe";
import { Blender } from "lib/models/blender";
import fetcher from "../utils/fetcher";

export const onGetAllBlendersService = async (): Promise<Blender[]> => {
  try {
    const response = await fetcher("/api/blenders/all", {
      method: "GET",
    });
    return response.blenders;
  } catch (err) {
    throw err;
  }
};

export const onGetLastRecipesByBlenderService = async (
  blender: BlenderName
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/blender/${blender}/last`, {
      method: "GET",
    });
    return response.recipes;
  } catch (err) {
    throw err;
  }
};

export const onGetTrendingRecipesByBlenderService = async (
  blender: BlenderName
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/blender/${blender}/trending`, {
      method: "GET",
    });
    return response.recipes;
  } catch (err) {
    throw err;
  }
};

export const onGetMostCommentedRecipesByBlenderService = async (
  blender: BlenderName
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/blender/${blender}/commented`, {
      method: "GET",
    });
    return response.recipes;
  } catch (err) {
    throw err;
  }
};
