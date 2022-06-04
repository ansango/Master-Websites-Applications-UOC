import { Icon } from "components/common/Icons";
import { FC } from "react";

type Props = {
  duration: Duration;
};

const Duration: FC<Props> = ({ duration }) => {
  return (
    <div className="badge space-x-2">
      <Icon icon="ClockIcon" kind="solid" className="w-4 h-4" />
      <span>{duration}</span>
    </div>
  );
};

export default Duration;
