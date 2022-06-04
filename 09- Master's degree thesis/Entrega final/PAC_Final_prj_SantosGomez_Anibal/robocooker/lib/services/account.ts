import { Account } from "lib/models/user/user";
import fetcher from "../utils/fetcher";

export const onGetAccountService = async (): Promise<Account> => {
  try {
    const response = await fetcher("/api/account");
    return response.account;
  } catch (error) {
    throw error;
  }
};

export const onSaveAccountService = async ({
  account,
}: {
  account: Account;
}): Promise<Account> => {
  try {
    const response = await fetcher("/api/account", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...account,
      }),
    });
    return response.account;
  } catch (err: any) {
    throw err;
  }
};

export const onUpdateAvatarAccountService = async ({
  formData,
}: {
  formData: FormData;
}): Promise<{ avatar: Url }> => {
  try {
    const response = await fetcher("/api/account/avatar", {
      method: "PATCH",
      body: formData,
    });
    return { avatar: response.avatar };
  } catch (err: any) {
    throw err;
  }
};

export const onUpdatePreferencesService = async (
  account: Account
): Promise<Account> => {
  try {
    const response = await fetcher("/api/account/preferences", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...account,
      }),
    });
    return response.account;
  } catch (err: any) {
    throw err;
  }
};

export const onUpdateSocialNetworkService = async (
  account: Account
): Promise<Account> => {
  try {
    const response = await fetcher("/api/account/social", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...account,
      }),
    });
    return response.account;
  } catch (err: any) {
    throw err;
  }
};

export const onLikeRecipeService = async (
  recipeId: RecipeId
): Promise<void> => {
  try {
    await fetcher(`/api/account/like/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipeId }),
    });
  } catch (error) {
    throw error;
  }
};

export const onUnlikeRecipeService = async (
  recipeId: RecipeId
): Promise<void> => {
  try {
    await fetcher(`/api/account/unlike/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ recipeId }),
    });
  } catch (error) {
    throw error;
  }
};
