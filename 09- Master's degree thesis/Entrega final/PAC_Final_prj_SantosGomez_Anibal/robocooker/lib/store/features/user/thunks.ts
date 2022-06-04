import { User } from "@/models/user/user";
import {
  onSignInService,
  onSignOutService,
  onSignUpService,
} from "@/services/auth";
import {
  onDeleteUserService,
  onRecoveryPasswordService,
  onResetPasswordService,
  onSaveUserService,
  onUpdatePasswordService,
  onVerifyEmailService,
} from "@/services/user";
import fetcher from "@/utils/fetcher";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async () => {
  const response = await fetcher("/api/user");
  return response.user;
});

export const signIn = createAsyncThunk(
  "user/signIn",
  async ({ email, password }: { email: Email; password: Password }) => {
    const response = await onSignInService({ email, password });
    return response;
  }
);

export const signUp = createAsyncThunk(
  "user/sigUp",
  async ({
    email,
    password,
    username,
  }: {
    email: Email;
    password: Password;
    username: Username;
  }) => {
    const response = await onSignUpService({ email, password, username });
    return response;
  }
);

export const signOut = createAsyncThunk("user/signOut", async () => {
  await onSignOutService();
  return null;
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (user: User) => {
    const response = await onSaveUserService({ user });
    return response;
  }
);

export const updatePassword = createAsyncThunk(
  "user/updatePassword",
  async ({
    oldPassword,
    newPassword,
  }: {
    oldPassword: Password;
    newPassword: Password;
  }) => {
    const response = await onUpdatePasswordService({
      oldPassword,
      newPassword,
    });
    return response;
  }
);

export const recoveryPassword = createAsyncThunk(
  "user/recoveryPassword",
  async ({ email }: { email: Email }) => {
    await onRecoveryPasswordService({ email });
    return null;
  }
);

export const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async ({
    tokenId,
    newPassword,
    redirect,
  }: {
    tokenId: TokenId;
    newPassword: Password;
    redirect: () => Promise<boolean>;
  }) => {
    await onResetPasswordService({ tokenId, newPassword });
    redirect();
    return null;
  }
);

export const verifyEmail = createAsyncThunk("user/verifyEmail", async () => {
  await onVerifyEmailService();
  return null;
});

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (password: Password) => {
    const response = onDeleteUserService({ password });
    return response;
  }
);
