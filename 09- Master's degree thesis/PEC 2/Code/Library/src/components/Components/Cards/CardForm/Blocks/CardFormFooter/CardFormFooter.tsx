/**
 * ?CardFormFooter Component
 */

import { FC } from "react";
import * as cn from "./CardFormFooterStyles";
import CardFormFooterProps from "./CardFormFooterProps";

/**
 * Description of CardFormFooter component displayed in Storybook
 */

const CardFormFooter: FC<CardFormFooterProps> = ({ label, link }) => {
  return (
    <div className={cn.footer}>
      {label}
      {link}
    </div>
  );
};

export default CardFormFooter;
