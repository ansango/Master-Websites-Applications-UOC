import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContainerLink: FC<Props> = ({ children }) => {
  return <div className="w-full flex justify-end">{children}</div>;
};

export default ContainerLink;
