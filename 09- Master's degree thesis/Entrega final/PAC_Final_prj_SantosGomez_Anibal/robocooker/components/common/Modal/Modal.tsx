import React, { FC, ReactNode, useState } from "react";
import Portal from "../Portal";

type Props = {
  children?: ReactNode;
  id: string;
};

const Modal: FC<Props> = ({ id, children }) => {
  const cn = `${id} modal modal-bottom sm:modal-middle`;
  return (
    <Portal>
      <div>
        <label htmlFor={id} className={cn}>
          {children}
        </label>
      </div>
    </Portal>
  );
};

export default Modal;
