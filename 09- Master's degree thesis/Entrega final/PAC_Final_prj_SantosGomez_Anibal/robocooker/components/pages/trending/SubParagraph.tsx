import { FC } from "react";

type Props = {
  content: string;
};

const SubParagraph: FC<Props> = ({ content }) => {
  return <p className="text-gray-600 dark:text-gray-400">{content}</p>;
};

export default SubParagraph;
