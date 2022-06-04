import { createSlice } from "@reduxjs/toolkit";
import { getUsersTrending } from "./thunks";
import { initialState } from "./state";
import { AppState } from "../..";

const robousersSlice = createSlice({
  name: "robousers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsersTrending.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getUsersTrending.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getUsersTrending.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const selectRobousers = (state: AppState) => state.robousers.value;
export const selectRobousersStatus = (state: AppState) =>
  state.robousers.status;

export default robousersSlice.reducer;
