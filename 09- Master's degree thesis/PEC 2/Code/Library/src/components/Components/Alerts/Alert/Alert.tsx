/**
 * ?Alert Component
 */

import { FC, useState } from "react";
import { AlertProps } from ".";
import { Icon } from "../../../Atoms";
import { ButtonIcon } from "../../Buttons";
import * as cn from "./AlertStyles";

/**
 * Show contextual information to your users using alert elements based on Tailwind CSS
 */

const Alert: FC<AlertProps> = ({
  kind = "info",
  bordered = false,
  dismissable = false,
  opened = false,
  withIcon = false,
  icon,
  text,
  link,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(opened);
  if (!isOpen) return null;
  const isBorder = bordered ? cn.alertBorderKind[kind] : cn.alertKind[kind];
  return (
    <div className={`${cn.alertBase} ${isBorder}`} role="alert" data-testid="alert">
      {withIcon && icon && <Icon icon={icon} classIcon={cn.iconAlert} />}
      <div className={`${cn.textBase} ${cn.textKind[kind]}`}>
        {text}
        <a href={link?.href} className={`${cn.linkBase} ${cn.linkKind[kind]}`}>
          {link?.text}
        </a>
      </div>
      {dismissable && (
        <ButtonIcon
          icon="XIcon"
          classButton={`${cn.btnCloseBase} ${cn.btnCloseKind[kind]}`}
          classIcon={cn.iconClose}
          action={() => setIsOpen(false)}
          data-testid="dismiss-button"
        />
      )}
    </div>
  );
};

export default Alert;
