import { FC, ReactNode } from "react";
import ModalTrigger from "./ModalOpen";

type Props = {
  children?: ReactNode;
};

const ModalAction: FC<Props> = ({ children }) => {
  return <div className="modal-action">{children}</div>;
};

export default ModalAction;
