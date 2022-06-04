import { FC } from "react";
import * as SimpleIcons from "@icons-pack/react-simple-icons";

type IconSimpleProps = {
  icon: keyof typeof SimpleIcons;
  className?: string;
};

const IconSimple: FC<IconSimpleProps> = ({ icon, ...rest }) => {
  const RIcon = SimpleIcons[icon];
  return <RIcon {...rest} />;
};

export default IconSimple;
