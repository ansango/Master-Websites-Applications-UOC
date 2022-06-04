import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContainerHeader: FC<Props> = ({ children }) => {
  return (
    <div className="container mx-auto space-y-5 md:text-center">{children}</div>
  );
};

export default ContainerHeader;
