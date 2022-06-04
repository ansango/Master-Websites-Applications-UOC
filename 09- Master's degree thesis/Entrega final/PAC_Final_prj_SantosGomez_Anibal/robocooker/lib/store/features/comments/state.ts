import { Comment } from "@/models/comment";

export interface RecipeState {
  status: "idle" | "loading" | "failed";
  value: Comment[] | null;
  onAddComment: boolean;
  onRemoveComment: boolean;
}

export const initialState: RecipeState = {
  status: "idle",
  value: null,
  onAddComment: false,
  onRemoveComment: false,
};
