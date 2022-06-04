import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";
import { FC } from "react";

export type IconProps = {
  icon: keyof typeof SolidIcons | keyof typeof OutlineIcons;
  kind: "solid" | "outline";
  className?: string;
};

const Icon: FC<IconProps> = ({ icon, kind, ...rest }) => {
  const RIcon = kind === "solid" ? SolidIcons[icon] : OutlineIcons[icon];
  return <RIcon {...rest} />;
};

export default Icon;
