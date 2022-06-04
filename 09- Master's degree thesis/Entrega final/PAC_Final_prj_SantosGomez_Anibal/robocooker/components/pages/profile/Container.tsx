import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Container: FC<Props> = ({ children }) => {
  return <section className="px-5 py-10 space-y-10">{children}</section>;
};

export default Container;
