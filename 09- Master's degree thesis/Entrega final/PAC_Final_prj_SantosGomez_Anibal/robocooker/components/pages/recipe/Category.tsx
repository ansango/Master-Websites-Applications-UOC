import { FC } from "react";

type Props = {
  category: CategoryName;
};

const Category: FC<Props> = ({ category }) => {
  return (
    <div className="badge capitalize badge-accent my-1 mr-1.5">{category}</div>
  );
};

export default Category;
