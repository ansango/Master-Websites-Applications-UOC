import * as HeroIcons from "@heroicons/react/solid";
import * as cn from "./IconStyles";

type IconProps = {
  /**
   * Icon
   */
  icon: keyof typeof HeroIcons;
  /**
   * xsmall | small | base | large | xlarge
   */
  size?: keyof typeof cn.size;
  /**
   * className override
   */
  classIcon?: string;
};

export default IconProps;