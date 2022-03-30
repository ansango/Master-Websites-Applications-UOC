import * as cn from "./BadgeStyles";
import * as HeroIcons from "@heroicons/react/solid";
type BadgeProps = {
  /**
   * string
   */
  label: string;
  /**
   * default | larger
   */
  size?: keyof typeof cn.size;
  /**
   * default | withIcon | iconOnly
   */
  kind?: keyof typeof cn.kind;
  /**
   * Hero Icons
   */
  icon?: keyof typeof HeroIcons;
  /**
   * default | dark | red | green | yellow | indigo | purple | pink
   */
  style?: keyof typeof cn.style;
  /**
   * true | false
   * @default false
   */
  link?: boolean;
  /**
   * Class Name override
   */
  classBadge?: string;
};

export default BadgeProps;
