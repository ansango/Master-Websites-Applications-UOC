import { RecipeDTO } from "@/models/recipe/recipe";
import { FC } from "react";
import IngredientC from "./Ingredient";

type Props = {
  ingredients: RecipeDTO["ingredients"];
};

const Ingredients: FC<Props> = ({ ingredients }) => {
  return (
    <div>
      {ingredients.map((ingredient, index) => (
        <IngredientC key={index} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default Ingredients;
