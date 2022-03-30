import { ReactElement } from "react";
import { BadgeProps } from "../../../Atoms/Badges/Badge";
import { IconProps } from "../../../Atoms/Icons/Icon";
import { IconSimpleProps } from "../../../Atoms/Icons/IconSimple";

type CardFeatureProps = {
  title: string;
  description: string;
  data: {
    name: string;
    icon: ReactElement<IconProps | IconSimpleProps>;
    badge?: ReactElement<BadgeProps>;
    featured?: boolean;
    onDetail?: () => void;
  }[];
  help?: {
    text: string;
    onHelp?: () => void;
  };
};

export default CardFeatureProps;
