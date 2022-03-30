/**
 * ?Badge Component
 */

import { FC } from "react";
import Icon from "../../Icons/Icon/Icon";
import * as cn from "./BadgeStyles";

import BadgeProps from "./BadgeProps";

/**
 * Use Tailwind CSS badges as elements to show counts or labels separately or inside other components.
 */

const Badge: FC<BadgeProps> = ({
  label,
  size = "default",
  kind = "default",
  icon,
  style = "default",
  link = false,
  classBadge,
}) => {
  const isLink = link ? cn.link[style] : "";
  const cnOption = `${cn.size[size]} ${cn.kind[kind]} ${cn.style[style]} ${isLink}`;
  const styles = classBadge ?? cnOption;
  const onlyIcon = kind === "iconOnly";
  const withIcon = kind === "withIcon";
  const classIcon = onlyIcon ? cn.iconSize["iconOnly"] : cn.iconSize["withIcon"];
  return (
    <span className={styles}>
      {icon && (onlyIcon || withIcon) && <Icon icon={icon} classIcon={classIcon} />}
      {kind !== "iconOnly" && <>{label}</>}
    </span>
  );
};

export default Badge;
