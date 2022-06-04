import { onGetUsersTrendingService } from "@/services/user";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUsersTrending = createAsyncThunk(
  "robousers/getUsersTrending",
  async () => {
    const response = await onGetUsersTrendingService();
    return response;
  }
);
