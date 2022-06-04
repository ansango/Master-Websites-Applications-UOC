import { RecipeDTO } from "@/models/recipe/recipe";

export interface SearchState {
  status: "idle" | "loading" | "failed";
  query: string | null;
  results: RecipeDTO[] | null;
}

export const initialState: SearchState = {
  status: "idle",
  query: null,
  results: null,
};
