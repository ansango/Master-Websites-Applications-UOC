import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContainerContent: FC<Props> = ({ children }) => {
  return <article className="container mx-auto space-y-5">{children}</article>;
};

export default ContainerContent;
