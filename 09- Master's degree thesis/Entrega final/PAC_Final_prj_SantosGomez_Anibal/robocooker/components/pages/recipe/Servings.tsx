import { Icon } from "components/common/Icons";
import { FC } from "react";

type Props = {
  servings: Servings;
};

const Servings: FC<Props> = ({ servings }) => {
  return (
    <div className="badge space-x-2">
      <Icon icon="UserGroupIcon" kind="solid" className="w-4 h-4" />
      <span>{servings}</span>
    </div>
  );
};

export default Servings;
