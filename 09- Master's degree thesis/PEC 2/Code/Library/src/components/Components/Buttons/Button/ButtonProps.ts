import * as cn from "./ButtonStyles";
import * as HeroIcons from "@heroicons/react/solid";

type ButtonProps = {
  /**
   * Label of the button
   */
  label: string;
  /**
   * button | submit | reset
   */
  type?: "button" | "submit" | "reset";
  /**
   * xsmall | small | base | large | xlarge
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
   * true | false
   */
  fullWidth?: boolean;
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
  /**
   * className override
   */
  classSpinner?: string;
  /**
   * className override
   */
  classBadge?: string;
};

export default ButtonProps;
