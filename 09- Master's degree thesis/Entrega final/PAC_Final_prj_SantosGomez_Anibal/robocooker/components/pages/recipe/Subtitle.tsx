import { FC, ReactNode } from "react";

type Props = {
  text: string;
};

const Subtitle: FC<Props> = ({ text }) => {
  return <h2 className="text-xl font-semibold">{text}</h2>;
};

export default Subtitle;
