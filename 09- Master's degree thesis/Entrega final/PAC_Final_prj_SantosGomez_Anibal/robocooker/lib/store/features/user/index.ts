import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import type { AppState } from "../../index";
import { initialState } from "./state";
import {
  getUser,
  signIn,
  signOut,
  signUp,
  updateUser,
  recoveryPassword,
  resetPassword,
  updatePassword,
  verifyEmail,
  deleteUser,
} from "./thunks";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
        state.onSignIn = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onSignIn = false;
        toast.success("Bienvenido!");
      })
      .addCase(signIn.rejected, (state) => {
        state.status = "failed";
        state.onSignIn = false;
        toast.error("Usuario o contraseña incorrectos");
      });
    builder
      .addCase(signUp.pending, (state) => {
        state.status = "loading";
        state.onSignUp = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onSignUp = false;
        toast.success("Bienvenido!");
      })
      .addCase(signUp.rejected, (state, action) => {
        state.status = "failed";
        state.onSignUp = false;
        toast.error("Usuario o contraseña incorrectos");
      });
    builder
      .addCase(signOut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOut.fulfilled, (state) => {
        state.status = "idle";
        state.value = null;
        toast.success("Hasta pronto!");
      })
      .addCase(signOut.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.status = "loading";
        state.onUpdateUser = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onUpdateUser = false;
        toast.success("Datos actualizados!");
      })
      .addCase(updateUser.rejected, (state) => {
        state.status = "failed";
        state.onUpdateUser = false;
        toast.error("Error al actualizar los datos");
      });
    builder
      .addCase(updatePassword.pending, (state) => {
        state.status = "loading";
        state.onUpdatePassword = true;
      })
      .addCase(updatePassword.fulfilled, (state) => {
        state.status = "idle";
        state.onUpdatePassword = false;
        toast.success("Contraseña actualizada!");
      })
      .addCase(updatePassword.rejected, (state) => {
        state.status = "failed";
        state.onUpdatePassword = false;
        toast.error("Error al actualizar la contraseña");
      });
    builder
      .addCase(recoveryPassword.pending, (state) => {
        state.status = "loading";
        state.onRecoveryPassword = true;
      })
      .addCase(recoveryPassword.fulfilled, (state) => {
        state.status = "idle";
        state.onRecoveryPassword = false;
        toast.success("Se ha enviado un correo con las instrucciones");
      })
      .addCase(recoveryPassword.rejected, (state) => {
        state.status = "failed";
        state.onRecoveryPassword = false;
        toast.error("Error al enviar el correo");
      });
    builder
      .addCase(resetPassword.pending, (state) => {
        state.onResetPassword = true;
        state.status = "loading";
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.status = "idle";
        state.onResetPassword = false;
        toast.success("Contraseña actualizada!");
      })
      .addCase(resetPassword.rejected, (state) => {
        state.status = "failed";
        state.onResetPassword = false;
        toast.error("Error al actualizar la contraseña");
      });
    builder
      .addCase(verifyEmail.pending, (state) => {
        state.status = "loading";
        state.onVerifyEmail = true;
      })
      .addCase(verifyEmail.fulfilled, (state) => {
        state.status = "idle";
        state.onVerifyEmail = false;
        toast.success("Te hemos enviado un correo para verificar tu cuenta");
      });
    builder.addCase(verifyEmail.rejected, (state) => {
      state.status = "failed";
      state.onVerifyEmail = false;
      toast.error("Error al enviar el correo");
    });
    builder
      .addCase(deleteUser.pending, (state) => {
        state.status = "loading";
        state.onDeleteUser = true;
      })
      .addCase(deleteUser.fulfilled, (state) => {
        state.status = "idle";
        state.value = null;
        state.onDeleteUser = false;
        toast.success("Te echaremos de menos!");
      })
      .addCase(deleteUser.rejected, (state) => {
        state.status = "failed";
        state.onDeleteUser = false;
        toast.error("Error al eliminar el usuario");
      });
  },
});

export const selectUser = (state: AppState) => state.user.value;
export const selectUserStatus = (state: AppState) => state.user.status;
export const selectUserUsername = (state: AppState) =>
  state.user.value && state.user.value.username;
export const selectOnSignInStatus = (state: AppState) => state.user.onSignIn;
export const selectOnSignUpStatus = (state: AppState) => state.user.onSignUp;
export const selectOnRecoveryPasswordStatus = (state: AppState) =>
  state.user.onRecoveryPassword;
export const selectOnResetPasswordStatus = (state: AppState) =>
  state.user.onResetPassword;
export const selectOnUpdatePasswordStatus = (state: AppState) =>
  state.user.onUpdatePassword;
export const selectOnUpdateUserStatus = (state: AppState) =>
  state.user.onUpdateUser;
export const selectOnDeleteUserStatus = (state: AppState) =>
  state.user.onDeleteUser;
export const selectOnVerifyEmailStatus = (state: AppState) =>
  state.user.onVerifyEmail;

export default userSlice.reducer;
