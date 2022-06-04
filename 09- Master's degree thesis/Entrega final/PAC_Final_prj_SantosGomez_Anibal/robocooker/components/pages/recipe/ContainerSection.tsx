import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContainerSection: FC<Props> = ({ children }) => {
  return (
    <section className="container mx-auto space-y-3 max-w-5xl">
      {children}
    </section>
  );
};

export default ContainerSection;
