import * as HeroIcons from "@heroicons/react/outline";

type AlertContentProps = {
  /**
   * string
   */
  title: string;
  /**
   * HeroIcons
   * */
  icon: keyof typeof HeroIcons;
  /**
   * string
   */
  content: string;
  /**
   * info | danger | success | warning | dark
   * @default "info"
   */
  kind?: "info" | "danger" | "success" | "warning" | "dark";
  /**
   * true | false
   * @default false
   */
  opened?: boolean;
  /**
   * true | false
   * @default false
   */
  dismissable?: boolean;
  /**
   * function
   * @default undefined
   */
  action?: () => void;
};

export default AlertContentProps;
