import { Follower } from "@/models/user/user";
import {
  selectOnUpdateFollow,
  selectProfileAccountId,
  selectProfileUser,
} from "@/store/features/profile";
import { followUser } from "@/store/features/profile/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import { FC, useCallback } from "react";

const Follow: FC = () => {
  const dispatch = useAppDispatch();
  const currentProfile = useAppSelector(selectProfileUser);
  const currentProfileAccountId = useAppSelector(selectProfileAccountId);
  const handleFollow = useCallback(() => {
    if (currentProfile && currentProfileAccountId) {
      const follower: Follower = {
        accountId: currentProfileAccountId,
        username: currentProfile,
      };

      dispatch(followUser(follower));
    }
  }, [dispatch, currentProfileAccountId, currentProfile]);
  const isLoading = useAppSelector(selectOnUpdateFollow);
  const cn = isLoading
    ? "btn btn-primary normal-case btn-sm space-x-1 text-xs sm:text-base loading"
    : "btn btn-primary normal-case btn-sm space-x-1 text-xs sm:text-base";
  return (
    <button className={cn} onClick={handleFollow}>
      {!isLoading && (
        <Icon icon="UserAddIcon" kind="solid" className="w-4 h-4" />
      )}
      <span>Seguir</span>
    </button>
  );
};

export default Follow;
