import { FC, ReactNode } from "react";
type BreadcrumbProps = {
  /**
   * Routes to render | LinkElement as React Router Link or Next Link
   */
  routes: {
    level: number;
    title: string;
    path: string;
    LinkElement?: FC<{ children: ReactNode }>;
    current?: boolean;
  }[];
  /**
   * solid | plain
   * @default plain
   */
  kind?: "solid" | "plain";
};

export default BreadcrumbProps;
