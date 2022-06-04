import { RecipeDTO } from "@/models/recipe/recipe";
import { updateMyCategoriesRecipe } from "@/store/features/account/myRecipes/thunks";
import { useAppDispatch } from "@/store/hooks";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { Form } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import Step from "components/common/Stepper/Step";
import React, { FC, useCallback, useState } from "react";
import CategoriesButton from "./CategoriesButton";
import { categoriesSelectMapper } from "@/mocks/categories";
import { blendersSelectMapper } from "@/mocks/blenders";

type Selector = {
  label: any;
  value: any;
};

type Props = {
  recipe: RecipeDTO;
};

const CategoriesForm: FC<Props> = ({ recipe }) => {
  const categoriesSelected =
    recipe.categories.map((category) => {
      return {
        label: category,
        value: category,
      };
    }) || [];
  const blendersSelected =
    recipe.blenders.map((blender) => {
      return {
        label: blender,
        value: blender,
      };
    }) || [];
  const [selectedCategories, setSelectedCategories] =
    useState<Selector[]>(categoriesSelected);
  const [selectedBlenders, setSelectedBlenders] =
    useState<Selector[]>(blendersSelected);
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    () =>
      dispatch(
        updateMyCategoriesRecipe({
          recipeId: recipe._id,
          categories: selectedCategories.map(({ value }) => value),
          blenders: selectedBlenders.map(({ value }) => value),
        })
      ),
    [dispatch, recipe, selectedCategories, selectedBlenders]
  );
  return (
    <div className="col-span-full 2xl:col-span-4">
      <Form onSubmit={onSubmit}>
        <CardSlim>
          <Step
            title="Categorías"
            step={3}
            icon={{
              kind: "outline",
              type: "DocumentTextIcon",
            }}
          >
            <CardSlimContent>
              <MultiSelect
                label="Categorías"
                options={categoriesSelectMapper}
                value={selectedCategories}
                onChange={setSelectedCategories}
                labelledBy="Select"
              />
              <MultiSelect
                label="Robots de cocina"
                options={blendersSelectMapper}
                value={selectedBlenders}
                onChange={setSelectedBlenders}
                labelledBy="Select"
              />
              <CardSlimAction>
                <CategoriesButton />
              </CardSlimAction>
            </CardSlimContent>
          </Step>
        </CardSlim>
      </Form>
    </div>
  );
};

export default CategoriesForm;
