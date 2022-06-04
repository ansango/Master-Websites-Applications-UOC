import { FC, ReactNode } from "react";
type Props = {
  children: ReactNode;
};
const Breadcrumb: FC<Props> = ({ children }) => {
  return (
    <div className="text-sm breadcrumbs">
      <ul>{children}</ul>
    </div>
  );
};

export default Breadcrumb;
