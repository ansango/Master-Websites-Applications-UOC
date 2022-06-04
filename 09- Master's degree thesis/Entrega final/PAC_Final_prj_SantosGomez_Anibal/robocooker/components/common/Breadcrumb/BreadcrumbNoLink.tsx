import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";
import { FC } from "react";
import { Icon } from "../Icons";

type Props = {
  label: string;
  icon: {
    icon: keyof typeof SolidIcons | keyof typeof OutlineIcons;
    kind: "solid" | "outline";
  };
};

const BreadcrumbNoLink: FC<Props> = ({ label, icon }) => {
  return (
    <li>
      <Icon icon={icon.icon} kind={icon.kind} className="w-4 h-4 mr-2" />
      {label}
    </li>
  );
};

export default BreadcrumbNoLink;
