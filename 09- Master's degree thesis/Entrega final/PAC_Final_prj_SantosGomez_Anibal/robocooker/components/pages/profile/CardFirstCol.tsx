import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardFirstCol: FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center space-x-2 sm:space-x-5 sm:justify-center sm:items-start md:space-x-0 ">
      {children}
    </div>
  );
};

export default CardFirstCol;
