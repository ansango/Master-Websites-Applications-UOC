/**
 * ?BadgeCounter Component
 */

import { FC } from "react";
import BadgeCounterProps from "./BadgeCounterProps";
import * as cn from "./BadgeCounterStyles";

/**
 * Use Tailwind CSS badges as elements to show counts or labels separately or inside other components.
 */

const Badge: FC<BadgeCounterProps> = ({ counter = 0, style = "default", classBadge }) => {
  if (counter === 0) return null;
  const badge = counter > 99 ? 99 : counter;
  const cnStyle = `${cn.base} ${cn.style[style]}`;
  const className = classBadge ?? cnStyle;
  return <span className={className}>{badge}</span>;
};

export default Badge;
