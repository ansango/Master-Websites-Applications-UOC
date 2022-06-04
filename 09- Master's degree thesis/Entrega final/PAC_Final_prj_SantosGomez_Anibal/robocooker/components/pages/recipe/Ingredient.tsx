import { Ingredient } from "@/models/recipe/recipe";
import { FC } from "react";

type Props = {
  ingredient: Ingredient;
};

const IngredientC: FC<Props> = ({ ingredient: { measure, name, quantity } }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <div className="label-text space-x-2 flex justify-between w-full">
          <span className="font-medium">{name}</span>
          <span className="space-x-1">
            <span>{quantity}</span>
            <span>{measure === "portion" ? "un" : measure}.</span>
          </span>
        </div>
        <input type="checkbox" className="checkbox checkbox-accent ml-3" />
      </label>
    </div>
  );
};

export default IngredientC;
