import { Follower } from "@/models/user/user";
import {
  selectOnUpdateUnFollow,
  selectProfileAccountId,
  selectProfileUser,
} from "@/store/features/profile";
import { unFollowUser } from "@/store/features/profile/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import { FC, useCallback } from "react";

const UnFollow: FC = () => {
  const dispatch = useAppDispatch();
  const currentProfile = useAppSelector(selectProfileUser);
  const currentProfileAccountId = useAppSelector(selectProfileAccountId);
  const handleFollow = useCallback(() => {
    if (currentProfile && currentProfileAccountId) {
      const follower: Follower = {
        accountId: currentProfileAccountId,
        username: currentProfile,
      };

      dispatch(unFollowUser(follower));
    }
  }, [dispatch, currentProfileAccountId, currentProfile]);
  const isLoading = useAppSelector(selectOnUpdateUnFollow);
  const cn = isLoading
    ? "btn btn-primary normal-case btn-sm space-x-1 text-xs sm:text-base loading"
    : "btn btn-primary normal-case btn-sm space-x-1 text-xs sm:text-base";
  return (
    <button className={cn} onClick={handleFollow}>
      {!isLoading && (
        <Icon icon="UserRemoveIcon" kind="solid" className="w-4 h-4" />
      )}
      <span>Dejar de seguir</span>
    </button>
  );
};

export default UnFollow;
