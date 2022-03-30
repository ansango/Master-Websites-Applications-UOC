import * as cn from "./IconSimpleStyles";
import * as SimpleIcons from "@icons-pack/react-simple-icons";
type IconSimpleProps = {
  /**
   * Icon
   */
  icon: keyof typeof SimpleIcons;
  /**
   * xsmall | small | base | large | xlarge
   */
  size?: keyof typeof cn.size;
  /**
   * className override
   */
  classIcon?: string;
};

export default IconSimpleProps;
