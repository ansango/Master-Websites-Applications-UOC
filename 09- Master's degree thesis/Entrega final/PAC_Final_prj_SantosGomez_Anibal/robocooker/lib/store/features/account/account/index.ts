import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";
import type { AppState } from "../../../index";
import {
  getAccount,
  removeAccountOnSignOut,
  updateAccount,
  updateAvatar,
  updatePreferences,
  updateSocialFB,
  updateSocialIG,
  updateSocialTW,
  updateSocialYT,
} from "./thunks";
import toast from "react-hot-toast";

export const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    addFavoriteRecipe: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    removeFavoriteRecipe: (state, action) => {
      state.favorites = state.favorites.filter((id) => id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAccount.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAccount.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.favorites = action.payload.favorites;
        state.collections = action.payload.collections;
      })
      .addCase(getAccount.rejected, (state) => {
        state.status = "failed";
        toast.error("Error al obtener la cuenta");
      });
    builder
      .addCase(updateAccount.pending, (state) => {
        state.status = "loading";
        state.onUpdateAccount = true;
      })
      .addCase(updateAccount.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onUpdateAccount = false;
        toast.success("Cuenta actualizada");
      })
      .addCase(updateAccount.rejected, (state) => {
        state.status = "failed";
        state.onUpdateAccount = false;
        toast.error("Error al actualizar la cuenta");
      });
    builder
      .addCase(updateAvatar.pending, (state) => {
        state.status = "loading";
        state.onUpdateAvatar = true;
      })
      .addCase(updateAvatar.fulfilled, (state, action) => {
        state.status = "idle";
        if (state.value) {
          state.value.avatar = action.payload.avatar;
          toast.success("Avatar actualizado");
        }
        state.onUpdateAvatar = false;
      })
      .addCase(updateAvatar.rejected, (state) => {
        state.status = "failed";
        state.onUpdateAvatar = false;
        toast.error("Error al actualizar el avatar");
      });
    builder.addCase(removeAccountOnSignOut.fulfilled, (state) => {
      state.value = null;

      state.status = "idle";
      state.onRemoveAccountSignOut = false;
    });
    builder.addCase(removeAccountOnSignOut.rejected, (state) => {
      state.status = "failed";
      state.onRemoveAccountSignOut = false;
    });
    builder.addCase(removeAccountOnSignOut.pending, (state) => {
      state.status = "loading";
      state.onRemoveAccountSignOut = true;
    });
    builder
      .addCase(updatePreferences.pending, (state) => {
        state.status = "loading";
        state.onUpdatePreferences = true;
      })
      .addCase(updatePreferences.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onUpdatePreferences = false;
        toast.success("Preferencias actualizadas");
      })
      .addCase(updatePreferences.rejected, (state) => {
        state.status = "failed";
        state.onUpdatePreferences = false;
        toast.error("Error al actualizar las preferencias");
      });
    builder
      .addCase(updateSocialFB.pending, (state) => {
        state.status = "loading";
        state.onUpdateFB = true;
      })
      .addCase(updateSocialFB.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onUpdateFB = false;
        toast.success("Facebook actualizado");
      })
      .addCase(updateSocialFB.rejected, (state) => {
        state.status = "failed";
        state.onUpdateFB = false;
        toast.error("Error al actualizar el Facebook");
      });
    builder
      .addCase(updateSocialIG.pending, (state) => {
        state.status = "loading";
        state.onUpdateIG = true;
      })
      .addCase(updateSocialIG.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onUpdateIG = false;
        toast.success("Instagram actualizado");
      })
      .addCase(updateSocialIG.rejected, (state) => {
        state.status = "failed";
        state.onUpdateIG = false;
        toast.error("Error al actualizar el Instagram");
      });
    builder
      .addCase(updateSocialTW.pending, (state) => {
        state.status = "loading";
        state.onUpdateTW = true;
      })
      .addCase(updateSocialTW.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onUpdateTW = false;
        toast.success("Twitter actualizado");
      })
      .addCase(updateSocialTW.rejected, (state) => {
        state.status = "failed";
        state.onUpdateTW = false;
        toast.error("Error al actualizar el Twitter");
      });
    builder
      .addCase(updateSocialYT.pending, (state) => {
        state.status = "loading";
        state.onUpdateYT = true;
      })
      .addCase(updateSocialYT.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.onUpdateYT = false;
        toast.success("Youtube actualizado");
      })
      .addCase(updateSocialYT.rejected, (state) => {
        state.status = "failed";
        state.onUpdateYT = false;
        toast.error("Error al actualizar el Youtube");
      });
  },
});

export const { addFavoriteRecipe, removeFavoriteRecipe } = accountSlice.actions;

export const selectAccount = (state: AppState) => state.account.value;
export const selectFavorites = (state: AppState) => state.account.favorites;
export const selectAccountId = (state: AppState) =>
  state.account.value ? state.account.value._id : null;
export const selectAccountStatus = (state: AppState) => state.account.status;
export const selectAccountOnUpdateAccount = (state: AppState) =>
  state.account.onUpdateAccount;
export const selectAccountOnUpdateAvatar = (state: AppState) =>
  state.account.onUpdateAvatar;
export const selectAccountOnRemoveAccountSignOut = (state: AppState) =>
  state.account.onRemoveAccountSignOut;
export const selectAccountOnUpdatePreferences = (state: AppState) =>
  state.account.onUpdatePreferences;
export const selectAccountOnUpdateFB = (state: AppState) =>
  state.account.onUpdateFB;
export const selectAccountOnUpdateIG = (state: AppState) =>
  state.account.onUpdateIG;
export const selectAccountOnUpdateTW = (state: AppState) =>
  state.account.onUpdateTW;
export const selectAccountOnUpdateYT = (state: AppState) =>
  state.account.onUpdateYT;

export default accountSlice.reducer;
