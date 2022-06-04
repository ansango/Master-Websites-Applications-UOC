import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { AppState } from "../..";

import { initialState } from "./state";
import { getProfile, followUser, unFollowUser } from "./thunk";

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.status = "loading";
        state.value = null;
        state.followers = [];
        state.following = [];
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
        state.followers = action.payload.followers;
        state.following = action.payload.following;
      })
      .addCase(getProfile.rejected, (state) => {
        state.status = "failed";
        state.value = null;
        state.followers = [];
        state.following = [];
        toast.error("Error al obtener el perfil");
      });
    builder
      .addCase(followUser.pending, (state) => {
        state.status = "loading";
        state.onUpdateFollow = true;
      })
      .addCase(followUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.onUpdateFollow = false;
        state.value &&
          (state.value.followers = [...state.value.followers, action.payload]);
        state.followers = [...state.followers, action.payload];
        toast.success("Seguido");
      })
      .addCase(followUser.rejected, (state) => {
        state.status = "failed";
        state.onUpdateFollow = false;
        toast.error("Error al seguir");
      });
    builder
      .addCase(unFollowUser.pending, (state) => {
        state.status = "loading";
        state.onUpdateUnFollow = true;
      })
      .addCase(unFollowUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.onUpdateUnFollow = false;
        state.value &&
          (state.value.followers = state.value.followers.filter(
            (follower) => follower.accountId !== action.payload.accountId
          ));
        state.followers = state.followers.filter(
          (follower) => follower.accountId !== action.payload.accountId
        );
        toast.success("Dejado de seguir");
      })
      .addCase(unFollowUser.rejected, (state) => {
        state.status = "failed";
        state.onUpdateUnFollow = false;
        toast.error("Error al dejar de seguir");
      });
  },
});

export const selectProfile = (state: AppState) => state.profile.value;
export const selectProfileUser = (state: AppState) =>
  state.profile.value && state.profile.value.username;
export const selectProfileAccountId = (state: AppState) =>
  state.profile.value && state.profile.value.accountId;
export const selectProfileStatus = (state: AppState) => state.profile.status;
export const selectProfileFollowers = (state: AppState) =>
  state.profile.followers;
export const selectOnUpdateFollow = (state: AppState) =>
  state.profile.onUpdateFollow;
export const selectOnUpdateUnFollow = (state: AppState) =>
  state.profile.onUpdateUnFollow;
export default profileSlice.reducer;
