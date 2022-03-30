

/**
 * ?Icon Component
 */

import { FC } from "react";
import * as HeroIcons from "@heroicons/react/solid";
import IconProps from "./IconProps";
import * as cn from "./IconStyles";

/**
 * Use this set of SVG powered icons for Tailwind CSS absed on Hero Icons
 */

const Icon: FC<IconProps> = ({ icon, size = "base", classIcon }) => {
  const cnSize = cn.size[size];
  const styles = classIcon ?? cnSize;
  const RIcon = HeroIcons[icon];
  return <RIcon className={styles} />;
};

export default Icon;
