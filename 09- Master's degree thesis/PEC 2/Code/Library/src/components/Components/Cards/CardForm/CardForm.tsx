/**
 * ?CardForm Component
 */

import { FC } from "react";
import { CardFormProps } from ".";

import * as cn from "./CardFormStyles";

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardForm: FC<CardFormProps> = ({ children }) => {
  return <div className={cn.card}>{children}</div>;
};

export default CardForm;
