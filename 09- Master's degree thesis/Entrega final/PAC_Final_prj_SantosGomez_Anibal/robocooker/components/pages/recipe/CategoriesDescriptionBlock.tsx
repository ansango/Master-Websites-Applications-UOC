import { RecipeDTO } from "@/models/recipe/recipe";
import { Icon } from "components/common/Icons";
import React, { FC } from "react";
import Blenders from "./Blenders";
import Categories from "./Categories";
import Duration from "./Duration";
import Printer from "./Printer";
import Servings from "./Servings";
import Subtitle from "./Subtitle";

type Props = {
  categories: RecipeDTO["categories"];
  duration: RecipeDTO["duration"];
  servings: RecipeDTO["servings"];
  blenders: RecipeDTO["blenders"];
  description: RecipeDTO["description"];
};

const CategoriesDescriptionBlock: FC<Props> = ({
  blenders,
  categories,
  description,
  duration,
  servings,
}) => {
  return (
    <article className="col-span-full md:col-span-6 flex flex-col justify-end space-y-5">
      <div className="space-y-1 pl-1 flex flex-col h-full">
        <div className="flex justify-between">
          <div className="flex flex-row flex-wrap">
            <Categories categories={categories} />
          </div>
          <Printer />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-1">
            <Duration duration={duration} />
            <Servings servings={servings} />
          </div>
          <div className="flex flex-row flex-wrap">
            <Blenders blenders={blenders} />
          </div>
        </div>
      </div>
      <div className="bg-base-200 shadow-sm p-5 rounded-xl space-y-3">
        <div className="flex items-center space-x-2">
          <Subtitle text="Descripción" />
          <Icon
            icon="BadgeCheckIcon"
            kind="outline"
            className="w-6 h-6 text-accent-focus"
          />
        </div>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default CategoriesDescriptionBlock;
