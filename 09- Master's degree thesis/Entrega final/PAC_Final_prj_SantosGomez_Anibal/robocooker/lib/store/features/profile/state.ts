import { Profile } from "@/models/user/profile";
import { Follower } from "@/models/user/user";

export interface ProfileState {
  status: "idle" | "loading" | "failed";
  value: Profile | null;
  followers: Follower[];
  following: Follower[];
  onUpdateFollow: boolean;
  onUpdateUnFollow: boolean;
}

export const initialState: ProfileState = {
  status: "idle",
  value: null,
  followers: [],
  following: [],
  onUpdateFollow: false,
  onUpdateUnFollow: false,
};
