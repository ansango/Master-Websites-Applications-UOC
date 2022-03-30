/**
 * ?CardFormHeader Component
 */

import { FC } from "react";
import * as cn from "./CardFormHeaderStyles";
import CardFormHeaderProps from "./CardFormHeaderProps";

/**
 * Description of CardFormHeader component displayed in Storybook
 */

const CardFormHeader: FC<CardFormHeaderProps> = ({ title }) => {
  return <h3 className={cn.title}>{title}</h3>;
};

export default CardFormHeader;
