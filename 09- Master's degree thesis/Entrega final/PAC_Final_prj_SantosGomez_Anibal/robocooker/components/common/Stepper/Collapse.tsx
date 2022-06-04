import { FC, ReactNode } from "react";

type Props = {
  getCollapseProps: any;
  children: ReactNode;
};

const Collapse: FC<Props> = ({ children, getCollapseProps }) => {
  return (
    <section {...getCollapseProps()}>
      {children}
    </section>
  );
};

export default Collapse;
