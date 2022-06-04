import { Recipe } from "@/models/recipe/recipe";
import { Bookmark, Collection } from "@/models/user/bookmark";

export interface BookmarkState {
  status: "idle" | "loading" | "failed";
  value: Bookmark | null;
  recipes: Recipe[] | null;
  collections: Collection[] | null;
  onAddCollection: boolean;
  
}

export const initialState: BookmarkState = {
  status: "idle",
  value: null,
  recipes: null,
  collections: null,
  onAddCollection: false,
  
};
