import { Icon } from "components/common/Icons";
import { FC } from "react";

type Props = {
  servings: Servings;
  duration: Duration;
  likes: number;
};

const CardFooter: FC<Props> = ({ servings, duration, likes }) => {
  return (
    <div className="card-body pt-0">
      <div className="card-actions justify-between items-center">
        <div className="flex space-x-2 items-center">
          {likes > 0 && (
            <div className="flex items-center space-x-2">
              <Icon
                icon="HeartIcon"
                kind="solid"
                className="w-5 h-5 text-secondary"
              />
              <span className="font-medium">{likes}</span>
            </div>
          )}
        </div>
        <div className="flex items-center space-x-2">
          <div className="badge space-x-2">
            <Icon icon="ClockIcon" kind="solid" className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <div className="badge space-x-2">
            <Icon icon="UserGroupIcon" kind="solid" className="w-4 h-4" />
            <span>{servings}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
