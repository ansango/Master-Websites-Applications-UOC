import { Account } from "@/models/user/user";

export interface AccountState {
  value: Account | null;
  favorites: RecipeId[];
  collections: CollectionId[];
  status: "idle" | "loading" | "failed";
  onUpdateAvatar: boolean;
  onUpdateAccount: boolean;
  onRemoveAccountSignOut: boolean;
  onUpdatePreferences: boolean;
  onUpdateFB: boolean;
  onUpdateIG: boolean;
  onUpdateTW: boolean;
  onUpdateYT: boolean;
}

export const initialState: AccountState = {
  value: null,
  favorites: [],
  collections: [],
  status: "idle",
  onUpdateAccount: false,
  onUpdateAvatar: false,
  onRemoveAccountSignOut: false,
  onUpdatePreferences: false,
  onUpdateFB: false,
  onUpdateIG: false,
  onUpdateTW: false,
  onUpdateYT: false,
};
