/**
 * ?ButtonIcon Component
 */

import { FC } from "react";
import { ButtonIconProps } from ".";
import { Icon } from "../../../Atoms";
import * as cn from "./ButtonIconStyles";

/**
 * Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
 */

const ButtonIcon: FC<ButtonIconProps> = ({
  icon,
  size = "base",
  kind = "solid",
  style = "default",
  rounded = "default",
  classButton,
  classIcon,
  disabled,
  action,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.outline;
  const mode = `${cnKind[style]} ${cn.size[size]} ${cn.rounded[rounded]}`;
  const styles = classButton ?? mode;
  const className = disabled ? `${styles} ${cn.disabled}` : styles;
  return (
    <button type="button" className={className} onClick={action} disabled={disabled} {...props}>
      <Icon icon={icon} size="xsmall" classIcon={classIcon} />
    </button>
  );
};

export default ButtonIcon;
