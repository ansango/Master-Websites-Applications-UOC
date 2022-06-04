import fetcher from "@/utils/fetcher";

export const onGetFavoritesService = async () => {
  try {
    const response = await fetcher("/api/account/favorites", {
      method: "GET",
    });
    return response.favorites;
  } catch (error) {
    throw error;
  }
};

export const onLikeRecipeService = async (
  recipeId: RecipeId
): Promise<void> => {
  try {
    await fetcher(`/api/account/like/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipeId }),
    });
  } catch (error) {
    throw error;
  }
};

export const onUnlikeRecipeService = async (
  recipeId: RecipeId
): Promise<void> => {
  try {
    await fetcher(`/api/account/unlike/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipeId }),
    });
  } catch (error) {
    throw error;
  }
};
