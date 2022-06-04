import { Follower } from "@/models/user/user";
import {
  onFollowUserService,
  onGetProfileService,
  onUnFollowUserService,
} from "@/services/profile";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (username: Username) => {
    const response = await onGetProfileService(username);
    return response;
  }
);

export const followUser = createAsyncThunk(
  "profile/followUser",
  async (follower: Follower) => {
    const response = await onFollowUserService(follower);
    return response;
  }
);

export const unFollowUser = createAsyncThunk(
  "profile/unFollowUser",
  async (follower: Follower) => {
    const response = await onUnFollowUserService(follower);
    return response;
  }
);
