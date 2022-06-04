import { FC, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const CardSlim: FC<Props> = ({ children }) => {
  return (
    <div className="card card-compact overflow-visible shadow-md bg-base-100 w-full">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardSlim;
