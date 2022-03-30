import * as HeroIcons from "@heroicons/react/outline";

export type LinkProps = {
  text: string;
  href: string;
};

type AlertProps = {
  /**
   * info | danger | success | warning | dark
   * @default "info"
   */
  kind?: "info" | "danger" | "success" | "warning" | "dark";
  /**
   * true | false
   * @default false
   */
  bordered?: boolean;
  /**
   * true | false
   * @default false
   */
  opened?: boolean;
  /**
   * true | false
   * @default false
   */
  withIcon?: boolean;
  /**
   * HeroIcons
   * */
  icon?: keyof typeof HeroIcons;
  /**
   * string
   */
  text: string;
  /**
   * {
   *  text: string,
   *  href: string
   * }
   * @default undefined
   */
  link?: LinkProps;
  /**
   * true | false
   * @default false
   */
  dismissable?: boolean;
};

export default AlertProps;
