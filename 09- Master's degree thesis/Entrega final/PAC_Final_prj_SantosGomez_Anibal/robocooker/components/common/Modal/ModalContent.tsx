import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const ModalContent: FC<Props> = ({ children }) => {
  return <div className="py-4">{children}</div>;
};

export default ModalContent;
