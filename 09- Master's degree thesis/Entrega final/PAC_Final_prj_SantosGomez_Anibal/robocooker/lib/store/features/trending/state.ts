import { RecipeDTO } from "@/models/recipe/recipe";

export interface TrendingState {
  value: RecipeDTO[] | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: TrendingState = {
  value: null,
  status: "idle",
};
