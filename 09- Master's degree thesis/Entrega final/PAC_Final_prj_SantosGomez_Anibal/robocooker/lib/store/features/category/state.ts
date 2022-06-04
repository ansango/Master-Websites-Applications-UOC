import { RecipeDTO } from "@/models/recipe/recipe";

export interface CategoryState {
  status: "idle" | "loading" | "failed";
  value: {
    trending: RecipeDTO[] | null;
    last: RecipeDTO[] | null;
    commented: RecipeDTO[] | null;
  };
}

export const initialState: CategoryState = {
  status: "idle",
  value: {
    trending: null,
    last: null,
    commented: null,
  },
};
