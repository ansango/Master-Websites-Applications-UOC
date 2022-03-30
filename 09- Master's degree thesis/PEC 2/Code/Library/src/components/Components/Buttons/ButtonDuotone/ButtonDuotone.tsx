/**
 * ?ButtonDuotone Component
 */

import { FC } from "react";
import { ButtonDuotoneProps } from ".";
import { BadgeCounterGradient, Icon, SpinnerGradient } from "../../../Atoms";
import * as cn from "./ButtonDuotoneStyles";

/**
 * Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
 */

const ButtonDuotone: FC<ButtonDuotoneProps> = ({
  label,
  size = "base",
  style = "purple",
  icon,
  loading = false,
  badge = 0,
  classButton,
  classIcon,
  action,
  disabled = false,
  ...props
}) => {
  const mode = `flex items-center justify-between ${cn.solid[style]} ${cn.size[size]}`;
  const styles = classButton ?? mode;
  const className = disabled ? `${styles} ${cn.disabled}` : styles;
  const iconOrLoading = loading || icon || badge ? "mr-2.5" : "";
  const reSize = size === "xsmall" || size === "small" ? "xsmall" : "small";

  return (
    <button type="button" className={className} onClick={action} disabled={disabled} {...props}>
      <span className={iconOrLoading}>{label}</span>
      {icon && !loading && <Icon icon={icon} size={reSize} classIcon={classIcon} />}
      {loading && <SpinnerGradient kind="duotone" style={style} size={reSize} />}
      {!icon && !loading && <BadgeCounterGradient counter={badge} style={style} kind="duotone" />}
    </button>
  );
};

export default ButtonDuotone;
