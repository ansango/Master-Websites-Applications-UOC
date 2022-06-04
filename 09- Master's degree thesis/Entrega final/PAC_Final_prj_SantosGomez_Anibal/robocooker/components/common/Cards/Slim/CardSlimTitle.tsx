import { FC } from "react";

type Props = {
  title: string;
};

const CardSlimTitle: FC<Props> = ({ title }) => {
  return <h5 className="card-title">{title}</h5>;
};

export default CardSlimTitle;
