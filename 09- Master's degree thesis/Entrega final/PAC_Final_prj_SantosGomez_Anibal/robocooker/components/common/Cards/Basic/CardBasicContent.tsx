import { FC, ReactNode } from "react";
type Props = {
  children?: ReactNode;
};
const CardBasicContent: FC<Props> = ({ children }) => {
  return <div className="space-y-4">{children}</div>;
};

export default CardBasicContent;
