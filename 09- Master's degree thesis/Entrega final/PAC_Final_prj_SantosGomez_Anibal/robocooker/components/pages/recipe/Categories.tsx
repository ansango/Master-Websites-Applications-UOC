import { RecipeDTO } from "@/models/recipe/recipe";
import { FC } from "react";
import Category from "./Category";

type Props = {
  categories: RecipeDTO["categories"];
};

const Categories: FC<Props> = ({ categories }) => {
  return (
    <>
      {categories.slice(0, 5).map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </>
  );
};

export default Categories;
