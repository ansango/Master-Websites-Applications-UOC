import { Icon } from "components/common/Icons";
import { FC } from "react";
import ActionFollow from "./ActionFollow";

type Props = {
  username: Username;
};

const CardFirstColContent: FC<Props> = ({ username }) => {
  return (
    <div className="sm:hidden">
      <div className="">
        <h1 className="font-semibold text-xl pb-2">@{username}</h1>
      </div>
      <div className="space-x-2">
        <ActionFollow />
        {/* <button className="btn btn-primary normal-case btn-sm space-x-1 text-xs sm:text-base">
          <Icon icon="PaperAirplaneIcon" kind="solid" className="w-4 h-4" />
          <span>Mensaje</span>
        </button> */}
      </div>
    </div>
  );
};

export default CardFirstColContent;
