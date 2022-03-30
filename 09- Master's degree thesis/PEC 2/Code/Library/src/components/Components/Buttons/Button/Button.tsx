import { FC } from "react";
import { ButtonProps } from ".";
import { BadgeCounter, Icon, Spinner } from "../../../Atoms";
import * as cn from "./ButtonStyles";

/**
 * Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
 */

const Button: FC<ButtonProps> = ({
  label,
  size = "base",
  kind = "solid",
  style = "default",
  rounded = "default",
  icon,
  loading = false,
  badge = 0,
  classButton,
  disabled = false,
  action,
  classIcon,
  classBadge,
  classSpinner,
  fullWidth = false,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.outline;
  const cnFullWidth = fullWidth ? cn.fullWidth : "";
  const mode = `flex items-center justify-between ${cnKind[style]} ${cn.size[size]} ${cn.rounded[rounded]} ${cnFullWidth}`;
  const styles = classButton ?? mode;
  const className = disabled ? `${styles} ${cn.disabled}` : styles;
  const iconOrLoading = loading || icon || badge ? "mr-2.5" : "";
  const reSize = size === "xsmall" || size === "small" ? "xsmall" : "small";
  return (
    <button type="button" className={className} disabled={disabled} onClick={action} {...props}>
      <span className={iconOrLoading}>{label}</span>
      {loading && <Spinner kind={kind} style={style} size={reSize} classSpinner={classSpinner} />}
      {icon && !loading && <Icon icon={icon} size={reSize} classIcon={classIcon} />}
      {!icon && !loading && <BadgeCounter counter={badge} style={style} classBadge={classBadge} />}
    </button>
  );
};

export default Button;
