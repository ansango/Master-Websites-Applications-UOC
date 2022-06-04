import { CollectionDTO } from "@/models/user/bookmark";

export interface CollectionState {
  status: "idle" | "loading" | "failed";
  value: CollectionDTO | null;
  onDeleteRecipe: boolean;
  onEditCollection: boolean;
  onDeleteCollection: boolean;
}

export const initialState: CollectionState = {
  status: "idle",
  value: null,
  onDeleteRecipe: false,
  onEditCollection: false,
  onDeleteCollection: false,
};
