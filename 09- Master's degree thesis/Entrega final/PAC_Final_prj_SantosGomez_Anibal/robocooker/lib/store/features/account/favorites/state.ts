import { Recipe } from "@/models/recipe/recipe";

export interface FavoriteState {
  status: "idle" | "loading" | "failed";
  value: Recipe[];
}

export const initialState: FavoriteState = {
  status: "idle",
  value: [],
};
