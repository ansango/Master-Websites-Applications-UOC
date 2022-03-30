import * as HeroIcons from "@heroicons/react/outline";
type ButtonGroupProps = {
  /**
   * solid | outline
   */
  kind?: "solid" | "outline";
  /**
   * info | danger | success | warning | dark
   */
  style?: "info" | "success" | "warning" | "danger" | "dark";
  /**
   * The buttons to be displayed
   * {
   *  label: string,
   *  withIcon: boolean,
   *  icon: keyof typeof HeroIcons
   *  onClick?: () => void
   * }[]
   */
  buttons: {
    label: string;
    withIcon?: boolean;
    icon?: keyof typeof HeroIcons;
    action?: () => void;
    disabled?: boolean;
  }[];
};

export default ButtonGroupProps;
