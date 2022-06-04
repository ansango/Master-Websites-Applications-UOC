import { RecipeDTO } from "@/models/recipe/recipe";

export interface MyRecipesState {
  status: "idle" | "loading" | "failed";
  value: RecipeDTO[] | null;
  onAddMyRecipe: boolean;
  onUpdateRecipeAvatar: boolean;
  onUpdateBasicInfo: boolean;
  onUpdateCategories: boolean;
  onUpdateIngredients: boolean;
  onUpdateSteps: boolean;
  onDeleteRecipe: boolean;
}

export const initialState: MyRecipesState = {
  status: "idle",
  value: null,
  onAddMyRecipe: false,
  onUpdateRecipeAvatar: false,
  onUpdateBasicInfo: false,
  onUpdateCategories: false,
  onUpdateIngredients: false,
  onUpdateSteps: false,
  onDeleteRecipe: false,
};
