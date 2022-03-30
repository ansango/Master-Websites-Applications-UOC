import { FC } from "react";
import { BadgeCounterGradient, Icon, SpinnerGradient } from "../../../Atoms";
import ButtonPropsMonochrome from "./ButtonMonochromeProps";
import * as cn from "./ButtonMonochromeStyles";

/**
 * Use the button component inside forms, as links, social login, payment options with support for multiple styles, colors, sizes, gradients, and shadows
 */

const ButtonMonochrome: FC<ButtonPropsMonochrome> = ({
  label,
  size = "base",
  kind = "solid",
  style = "blue",
  icon,
  loading = false,
  badge = 0,
  classButton,
  classIcon,
  action,
  disabled = false,
  ...props
}) => {
  const cnKind = kind === "solid" ? cn.solid : cn.shadow;
  const mode = `flex items-center justify-between ${cnKind[style]} ${cn.size[size]}`;
  const styles = classButton ?? mode;
  const className = disabled ? `${styles} ${cn.disabled}` : styles;
  const iconOrLoading = loading || icon || badge ? "mr-2.5" : "";
  const reSize = size === "xsmall" || size === "small" ? "xsmall" : "small";
  return (
    <button type="button" className={className} onClick={action} disabled={disabled} {...props}>
      <span className={iconOrLoading}>{label}</span>
      {icon && !loading && <Icon icon={icon} size={reSize} classIcon={classIcon} />}
      {loading && <SpinnerGradient kind="monochrome" style={style} size={reSize} />}
      {!icon && !loading && (
        <BadgeCounterGradient counter={badge} style={style} kind="monochrome" />
      )}
    </button>
  );
};

export default ButtonMonochrome;
