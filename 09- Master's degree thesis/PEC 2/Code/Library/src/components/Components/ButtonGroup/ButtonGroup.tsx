/**
 * ?ButtonGroup Component
 */

import { FC } from "react";
import { ButtonGroupProps } from ".";
import { Icon } from "../../Atoms";
import * as cn from "./ButtonGroupStyles";

/**
 * Button groups are a Tailwind CSS powered set of buttons sticked together in a horizontal line
 */

const ButtonGroup: FC<ButtonGroupProps> = ({ kind = "solid", style = "dark", buttons }) => {
  const { length } = buttons;
  const bgStyle = kind === "solid" ? cn.bgStyleSolid[style] : cn.bgStyleOutline[style];
  const cnBase = `${cn.bgBase} ${cn.bgKind[kind]} ${bgStyle}`;
  return (
    <div className={cn.bgContainer} role="group">
      {buttons.map(({ label, icon, action, withIcon, disabled = false }, index) => {
        const isFirst = index === 0;
        const isLast = index === length - 1;
        const cnRest = isLast ? cn.bgLast : cn.bgRest;
        const cnRender = isFirst ? `${cnBase} ${cn.bgFirst}` : `${cnBase} ${cnRest}`;
        const rendFull = disabled ? `${cnRender} ${cn.disabled}` : cnRender;
        return (
          <button
            key={index}
            className={rendFull}
            onClick={action}
            disabled={disabled}
            data-testid={`btn-group-btn-${index + 1}`}
          >
            {withIcon && icon && <Icon icon={icon} classIcon={cn.iBase} />}
            {label}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonGroup;
