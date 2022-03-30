import * as cn from "./ButtonIconStyles";
import * as HeroIcons from "@heroicons/react/solid";

type ButtonIconProps = {
  /**
   * HeroIcons
   */
  icon: keyof typeof HeroIcons;
  /**
   *  button | submit | reset
   */
  type?: "button" | "submit" | "reset";
  /**
   * small | base | large
   * @default "base"
   */
  size?: keyof typeof cn.size;
  /**
   * solid | outline
   * @default "solid"
   */
  kind?: "solid" | "outline";
  /**
   * default | alternative | dark | light | green | red | yellow | purple
   * @default "default"
   */
  style?: "default" | "alternative" | "dark" | "light" | "green" | "red" | "yellow" | "purple";
  /**
   * pill | rounded
   * @default "rounded"
   */
  rounded?: keyof typeof cn.rounded;
  /**
   * disabled
   * @default false
   */
  disabled?: boolean;
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
  /**
   * className override
   */
};

export default ButtonIconProps;
