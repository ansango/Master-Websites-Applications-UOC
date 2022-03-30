/**
 * ?IconSimple Component
 */

import { FC } from "react";
import * as cn from "./IconSimpleStyles";
import * as SimpleIcons from "@icons-pack/react-simple-icons";
import IconSimpleProps from "./IconSimpleProps";

/**
 * Use this set of SVG powered icons for Tailwind CSS, based on Simple Icons
 */

const IconSimple: FC<IconSimpleProps> = ({ icon, size = "base", classIcon }) => {
  const cnSize = cn.size[size];
  const styles = classIcon ?? cnSize;
  const RIcon = SimpleIcons[icon];
  return <RIcon className={styles} />;
};

export default IconSimple;
