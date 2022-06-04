import { FC } from "react";

type Props = {
  label: string;
};

const ModalTitle: FC<Props> = ({ label }) => {
  return <h3 className="font-bold text-lg">{label}</h3>;
};

export default ModalTitle;
