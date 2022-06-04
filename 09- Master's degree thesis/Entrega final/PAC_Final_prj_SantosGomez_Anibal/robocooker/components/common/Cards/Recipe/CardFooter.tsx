import { Avatar } from "components/common/Avatar";
import { Icon } from "components/common/Icons";
import Link from "next/link";
import { FC } from "react";

type Props = {
  servings: number;
  duration: number;
  avatar: string;
  username: string;
};

const CardFooter: FC<Props> = ({ avatar, username, servings, duration }) => {
  return (
    <div className="card-body pt-0 justify-end">
      <div className="card-actions justify-between items-center">
        <div className="flex space-x-2 items-center">
          <Avatar size="xs" imgUrl={avatar} username={username} />
          <Link href={`/profile/${username}`}>
            <a className="text-sm font-medium hover:underline">@{username}</a>
          </Link>
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
