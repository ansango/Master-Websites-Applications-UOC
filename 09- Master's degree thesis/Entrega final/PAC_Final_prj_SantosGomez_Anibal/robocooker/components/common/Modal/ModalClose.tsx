import { FC, ReactNode } from "react";
import { closeModal } from "./utils";

type Props = {
  className?: string;
  id: string;
  children?: ReactNode;
};

const ModalClose: FC<Props> = ({ id, className, children }) => {
  return (
    <button className={className} onClick={() => closeModal(id)}>
      {children}
    </button>
  );
};

export default ModalClose;
