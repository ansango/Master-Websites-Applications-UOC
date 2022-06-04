import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CardBasicAction: FC<Props> = ({ children }) => {
  return <div className="card-actions justify-end">{children}</div>;
};

export default CardBasicAction;
