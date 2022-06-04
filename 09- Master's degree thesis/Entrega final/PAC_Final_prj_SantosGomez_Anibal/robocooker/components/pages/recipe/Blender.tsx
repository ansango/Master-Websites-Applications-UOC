import { Icon } from "components/common/Icons";
import { FC } from "react";

type Props = {
  blender: BlenderName;
};

const Blender: FC<Props> = ({ blender }) => {
  return (
    <div className="badge badge-primary space-x-2 capitalize my-1 mr-1.5">
      <Icon icon="LightningBoltIcon" kind="solid" className="w-4 h-4" />
      <span>{blender}</span>
    </div>
  );
};

export default Blender;
