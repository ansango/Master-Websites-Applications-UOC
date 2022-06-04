import { FC, ReactNode } from "react";
import { openModal } from "./utils";

type Props = {
  className?: string;
  id: string;
  children?: ReactNode;
};

const ModalOpen: FC<Props> = ({ id, className, children }) => {
  return (
    <button className={className} onClick={() => openModal(id)}>
      {children}
    </button>
  );
};

export default ModalOpen;
