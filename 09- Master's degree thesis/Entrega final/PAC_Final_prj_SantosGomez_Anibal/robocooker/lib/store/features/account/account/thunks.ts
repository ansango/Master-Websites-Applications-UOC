import { Account } from "@/models/user/user";
import {
  onSaveAccountService,
  onUpdateAvatarAccountService,
  onUpdatePreferencesService,
  onUpdateSocialNetworkService,
} from "@/services/account";
import fetcher from "@/utils/fetcher";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAccount = createAsyncThunk("account/getAccount", async () => {
  const response = await fetcher("/api/account");
  return response.account;
});

export const updateAccount = createAsyncThunk(
  "account/updateAccount",
  async (account: Account) => {
    const response = await onSaveAccountService({ account });
    return response;
  }
);

export const updateAvatar = createAsyncThunk(
  "account/updateAvatar",
  async (formData: FormData) => {
    const response = await onUpdateAvatarAccountService({ formData });
    return response;
  }
);

export const removeAccountOnSignOut = createAsyncThunk(
  "account/removeAccountOnSignOut",
  async (timing?: number) => {
    return new Promise<void>((resolve) =>
      setTimeout(() => resolve(), timing ?? 2000)
    );
  }
);

export const updatePreferences = createAsyncThunk(
  "account/updatePreferences",
  async (account: Account) => {
    const response = await onUpdatePreferencesService(account);
    return response;
  }
);

export const updateSocialFB = createAsyncThunk(
  "account/updateSocialFB",
  async (account: Account) => {
    const response = await onUpdateSocialNetworkService(account);
    return response;
  }
);

export const updateSocialIG = createAsyncThunk(
  "account/updateSocialIG",
  async (account: Account) => {
    const response = await onUpdateSocialNetworkService(account);
    return response;
  }
);

export const updateSocialTW = createAsyncThunk(
  "account/updateSocialTW",
  async (account: Account) => {
    const response = await onUpdateSocialNetworkService(account);
    return response;
  }
);

export const updateSocialYT = createAsyncThunk(
  "account/updateSocialYT",
  async (account: Account) => {
    const response = await onUpdateSocialNetworkService(account);
    return response;
  }
);
