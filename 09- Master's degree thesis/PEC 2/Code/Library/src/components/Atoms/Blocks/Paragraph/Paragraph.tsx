/**
 * ?Paragraph Component
 */

import { FC } from "react";
import ParagraphProps from "./ParagraphProps";
import * as cn from "./ParagraphStyles";

/**
 * Description of Paragraph component displayed in Storybook
 */

const Paragraph: FC<ParagraphProps> = ({ content }) => {
  return <p className={cn.paragraph}>{content}</p>;
};

export default Paragraph;
