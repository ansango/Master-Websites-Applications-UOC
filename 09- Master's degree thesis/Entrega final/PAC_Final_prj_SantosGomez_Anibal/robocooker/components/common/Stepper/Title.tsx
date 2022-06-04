import { FC, ReactNode } from "react";

type Props = { children: ReactNode; title: string };

const Title: FC<Props> = ({ children, title }) => (
  <h5 className="font-semibold flex items-center space-x-2">
    {children} <span>{title}</span>
  </h5>
);

export default Title;
