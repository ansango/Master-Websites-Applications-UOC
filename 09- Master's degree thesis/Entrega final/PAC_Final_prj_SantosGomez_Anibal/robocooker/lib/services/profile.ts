import { Profile } from "@/models/user/profile";
import { Follower } from "@/models/user/user";
import fetcher from "@/utils/fetcher";

export const onGetProfileService = async (
  username: Username
): Promise<Profile> => {
  try {
    const response = await fetcher(`/api/profile/${username}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.profile;
  } catch (error) {
    throw error;
  }
};

export const onGetAllProfilesService = async (): Promise<Profile[]> => {
  try {
    const response = await fetcher(`/api/profiles`, {
      method: "GET",
    });
    return response.profiles;
  } catch (error) {
    throw error;
  }
};

export const onFollowUserService = async (
  follower: Follower
): Promise<Follower> => {
  try {
    const response = await fetcher(`/api/profile/follow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ follower }),
    });
    return response.follower;
  } catch (error) {
    throw error;
  }
};

export const onUnFollowUserService = async (
  follower: Follower
): Promise<Follower> => {
  try {
    const response = await fetcher(`/api/profile/unfollow`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ follower }),
    });
    return response.follower;
  } catch (error) {
    throw error;
  }
};
