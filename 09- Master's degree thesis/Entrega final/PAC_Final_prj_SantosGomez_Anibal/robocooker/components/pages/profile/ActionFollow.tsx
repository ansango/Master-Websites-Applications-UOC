import {
  selectProfileFollowers,
  selectProfileUser,
} from "@/store/features/profile";
import { selectUser, selectUserUsername } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";

import { FC } from "react";

import Follow from "./Follow";
import UnFollow from "./UnFollow";

const ActionFollow: FC = () => {
  const user = useAppSelector(selectUser);
  const currentProfile = useAppSelector(selectProfileUser);
  const currentUser = useAppSelector(selectUserUsername);
  const isFollowing =
    useAppSelector(selectProfileFollowers).filter(
      (follower) => follower.username === currentUser
    ).length > 0;
  const isSameUser =
    currentProfile && currentUser && currentProfile === currentUser;
  if (isSameUser) return null;

  return (
    <>
      {!isFollowing && user && <Follow />}
      {isFollowing && user && <UnFollow />}
    </>
  );
};

export default ActionFollow;
