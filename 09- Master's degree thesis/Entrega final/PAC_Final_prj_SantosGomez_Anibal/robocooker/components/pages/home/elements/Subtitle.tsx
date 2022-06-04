import { FC } from "react";

type Props = {
  title: string;
};

const Subtitle: FC<Props> = ({ title }) => {
  return <h2 className="text-3xl font-bold">{title}</h2>;
};

export default Subtitle;
