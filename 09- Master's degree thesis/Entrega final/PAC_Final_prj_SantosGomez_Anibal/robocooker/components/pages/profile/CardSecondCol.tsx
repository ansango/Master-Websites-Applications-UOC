import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardSecondCol: FC<Props> = ({ children }) => {
  return <div className="space-y-3">{children}</div>;
};

export default CardSecondCol;
