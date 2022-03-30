import * as HeroIcons from "@heroicons/react/outline";

type AccordionProps = {
  /**
   * info | success | warning | danger | dark
   */
  kind?: "info" | "danger" | "success" | "warning" | "dark";
  /**
   * Array of objects
   * [
   *  {
   *   title: string,
   *   content: string,
   *   icon?: keyof typeof HeroIcons
   *  }
   * ]
   */
  data: {
    title: string;
    content: string[] | string;
    icon?: keyof typeof HeroIcons;
  }[];
};

export default AccordionProps;
