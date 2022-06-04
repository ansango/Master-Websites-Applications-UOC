import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CardBasic: FC<Props> = ({ children }) => {
  return (
    <div className="card shadow-md bg-base-100 w-full">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardBasic;
