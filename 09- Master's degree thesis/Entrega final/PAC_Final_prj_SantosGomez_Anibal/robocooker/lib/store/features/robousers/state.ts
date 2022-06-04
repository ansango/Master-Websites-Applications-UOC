import { UserTrending } from "@/models/user/user";

export interface RobousersState {
  value: UserTrending[] | null;
  status: "idle" | "loading" | "failed";
}

export const initialState: RobousersState = {
  value: null,
  status: "idle",
};
