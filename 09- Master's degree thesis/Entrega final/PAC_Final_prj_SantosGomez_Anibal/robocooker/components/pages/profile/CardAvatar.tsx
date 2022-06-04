import { Avatar } from "components/common/Avatar";
import { FC } from "react";

type Props = {
  avatar: Url;
  username: Username;
};

const CardAvatar: FC<Props> = ({ avatar, username }) => {
  return (
    <>
      <div className="flex items-center md:hidden sm:mt-5">
        <Avatar size="md" imgUrl={avatar} username={username} />
      </div>
      <div className="hidden md:flex md:items-center mt-5">
        <Avatar size="lg" imgUrl={avatar} username={username} />
      </div>
    </>
  );
};

export default CardAvatar;
