import { selectRecipeLikes } from "@/store/features/recipes/recipe";
import { useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import { FC } from "react";

const Likes: FC = () => {
  const likes = useAppSelector(selectRecipeLikes).length;
  return (
    <div className="flex items-center space-x-2">
      <Icon icon="HeartIcon" kind="solid" className="w-7 h-7 text-secondary" />
      <span className="font-medium text-lg">{likes}</span>
    </div>
  );
};

export default Likes;
