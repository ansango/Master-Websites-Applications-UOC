import { RecipeDTO } from "@/models/recipe/recipe";
import { Icon } from "components/common/Icons";
import React, { FC } from "react";
import Ingredients from "./Ingredients";
import Subtitle from "./Subtitle";

type Props = {
  ingredients: RecipeDTO["ingredients"];
};

const IngredientsBlock: FC<Props> = ({ ingredients }) => {
  return (
    <article className="col-span-full md:col-span-6 flex flex-col justify-end">
      <div className="bg-base-200 shadow-sm p-5 rounded-lg space-y-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Subtitle text="Ingredientes" />
            <Icon
              icon="ClipboardListIcon"
              kind="outline"
              className="w-6 h-6 text-accent-focus"
            />
          </div>
        </div>
        <Ingredients ingredients={ingredients} />
      </div>
    </article>
  );
};

export default IngredientsBlock;
