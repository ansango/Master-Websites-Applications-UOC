import * as cn from "./ButtonDuotoneStyles";
import * as HeroIcons from "@heroicons/react/solid";

type ButtonDuotoneProps = {
  /**
   * Label of the button
   */
  label: string;
  /**
   *  button | submit | reset
   */
  type?: "button" | "submit" | "reset";
  /**
   * xsmall | small | base | large | xlarge
   * @default "base"
   */
  size?: keyof typeof cn.size;
  /**
   * purple | cyan | green | pink | orange | lime | yellow;
   * @default "purple"
   */
  style?: "blue" | "green" | "cyan" | "teal" | "lime" | "red" | "pink" | "purple";
  /**
   * HeroIcons
   */
  icon?: keyof typeof HeroIcons;
  /**
   * disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * loading
   * @default false
   */
  loading?: boolean;
  /**
   * badge, used for notifications count
   */
  badge?: number;
  /**
   * onClick event
   */
  action?: () => void;
  /**
   * className override
   */
  classButton?: string;
  /**
   * className override
   */
  classIcon?: string;
};

export default ButtonDuotoneProps;
