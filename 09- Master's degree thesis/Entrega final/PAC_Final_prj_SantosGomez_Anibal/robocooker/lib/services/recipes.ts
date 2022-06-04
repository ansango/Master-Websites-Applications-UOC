import { RecipeDAO, RecipeDTO } from "@/models/recipe/recipe";
import fetcher from "@/utils/fetcher";

export const onGetLastRecipesService = async (
  limit: number
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/recipes/last?limit=${limit}`, {
      method: "GET",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const onGetMyRecipesService = async (): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/recipes/user-recipes`, {
      method: "GET",
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const onGetRecipeByIdService = async (
  id: string
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes/${id}`, {
      method: "GET",
    });
    return response.recipe;
  } catch (error) {
    throw error;
  }
};

export const onGetTrendingRecipesService = async (
  limit: number
): Promise<RecipeDTO[]> => {
  try {
    const response = await fetcher(`/api/recipes/trending?limit=${limit}`, {
      method: "GET",
    });
    return response.recipes;
  } catch (error) {
    throw error;
  }
};

export const onPostRecipeService = async (
  recipe: RecipeDAO
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipe }),
    });
    return response.recipe;
  } catch (error) {
    throw error;
  }
};

export const onUpdateImageRecipeService = async (
  id: RecipeId,
  file: FormData
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes/image/${id}`, {
      method: "PATCH",
      body: file,
    });
    return response.recipe;
  } catch (error) {
    throw error;
  }
};

export const onUpdateBasicInfoRecipeService = async (
  id: RecipeId,
  {
    description,
    duration,
    name,
    servings,
  }: {
    name: RecipeDAO["name"];
    description: RecipeDAO["description"];
    servings: RecipeDAO["servings"];
    duration: RecipeDAO["duration"];
  }
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes/info/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ description, duration, name, servings }),
    });
    return response.recipe;
  } catch (error) {
    throw error;
  }
};

export const onUpdateCategoriesRecipeService = async (
  id: RecipeId,
  categories: RecipeDAO["categories"],
  blenders: RecipeDAO["blenders"]
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes/categories/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categories, blenders }),
    });
    return response.recipe;
  } catch (error) {
    throw error;
  }
};

export const onUpdateIngredientsRecipeService = async (
  id: RecipeId,
  ingredients: RecipeDAO["ingredients"]
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes/ingredients/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ingredients }),
    });
    return response.recipe;
  } catch (error) {
    throw error;
  }
};

export const onUpdateStepsRecipeService = async (
  id: RecipeId,
  steps: RecipeDAO["steps"]
): Promise<RecipeDTO> => {
  try {
    const response = await fetcher(`/api/recipes/steps/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ steps }),
    });
    return response.recipe;
  } catch (error) {
    throw error;
  }
};

export const onDeleteRecipeService = async (id: RecipeId): Promise<void> => {
  try {
    await fetcher(`/api/recipes/${id}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
};
