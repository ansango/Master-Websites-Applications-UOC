/**
 * ?BadgeCounterGradient Component
 */

import { FC } from "react";
import BadgeCounterGradientProps from "./BadgeCounterGradientProps";
import * as cn from "./BadgeCounterGradientStyles";

/**
 * Use Tailwind CSS badges as elements to show counts or labels separately or inside other components.
 */

const BadgeCounterGradient: FC<BadgeCounterGradientProps> = ({
  counter = 0,
  kind = "monochrome",
  style = "blue",
}) => {
  if (counter === 0) return null;
  const badge = counter > 99 ? 99 : counter;
  const cnKind = kind === "monochrome" ? cn.monochrome : cn.duotone;
  const className = `${cn.base} ${cnKind[style]}`;
  return <span className={className}>{badge}</span>;
};

export default BadgeCounterGradient;
