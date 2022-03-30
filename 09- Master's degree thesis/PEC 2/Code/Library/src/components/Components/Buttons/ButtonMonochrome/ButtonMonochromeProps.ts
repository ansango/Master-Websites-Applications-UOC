import * as cn from "./ButtonMonochromeStyles";
import * as HeroIcons from "@heroicons/react/solid";

type ButtonPropsMonochrome = {
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
   * solid | shadow
   * @default "solid"
   */
  kind?: "solid" | "shadow";
  /**
   * blue | green | cyan | teal | lime | red | pink | purple
   * @default "default"
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

export default ButtonPropsMonochrome;