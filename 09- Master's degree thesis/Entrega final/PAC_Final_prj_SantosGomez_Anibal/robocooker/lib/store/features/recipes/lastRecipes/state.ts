import { RecipeDTO } from "@/models/recipe/recipe";

export interface LastRecipesState {
  status: "idle" | "loading" | "failed";
  value: RecipeDTO[] | null;
}

export const initialState: LastRecipesState = {
  status: "idle",
  value: null,
};
