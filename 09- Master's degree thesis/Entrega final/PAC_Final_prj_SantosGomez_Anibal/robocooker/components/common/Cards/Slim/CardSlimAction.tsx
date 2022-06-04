import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CardSlimAction: FC<Props> = ({ children }) => {
  return <div className="card-actions justify-end">{children}</div>;
};

export default CardSlimAction;
