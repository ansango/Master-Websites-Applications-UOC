import React, { FC, ReactNode } from "react";
import { Icon } from "../Icons";
import ModalClose from "./ModalClose";
import { closeModal } from "./utils";

type Props = {
  className?: string;
  children?: ReactNode;
  id: string;
};

const ModalBox: FC<Props> = ({ className, children, id }) => {
  const cn = `modal-box relative ${className}` || "modal-box relative";
  return (
    <div className={cn}>
      <ModalClose
        id={id}
        className="btn btn-sm btn-ghost btn-circle absolute right-2 top-2"
      >
        <Icon icon="XIcon" className="w-4 h-4" kind="outline" />
      </ModalClose>

      {children}
    </div>
  );
};

export default ModalBox;
