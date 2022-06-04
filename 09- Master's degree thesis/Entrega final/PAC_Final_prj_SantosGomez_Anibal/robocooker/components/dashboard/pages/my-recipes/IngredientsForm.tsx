import { Ingredient, RecipeDTO } from "@/models/recipe/recipe";
import { updateMyIngredientsRecipe } from "@/store/features/account/myRecipes/thunks";
import { useAppDispatch } from "@/store/hooks";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import Step from "components/common/Stepper/Step";
import React, { FC, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import IngredientFields from "./IngredientFields";
import IngredientsButton from "./IngredientsButton";

type Props = {
  id: RecipeId;
  ingredients: RecipeDTO["ingredients"];
};

const IngredientsForm: FC<Props> = ({ ingredients, id }) => {
  const dispatch = useAppDispatch();
  const methods = useForm({
    defaultValues: {
      ingredients: ingredients.map(({ measure, name, quantity }) => {
        return {
          measure,
          name,
          quantity,
        };
      }),
    },
  });
  const { handleSubmit } = methods;
  const onSubmit = useCallback(
    (values: any) => {
      const ingredientsFiltered = values.ingredients.filter(
        ({ name, quantity, measure }: any) => {
          return name && quantity && measure;
        }
      );
      const ingredients = ingredientsFiltered.map((ingredient: any) => {
        return {
          ...ingredient,
          quantity: parseInt(ingredient.quantity),
        };
      });
      dispatch(updateMyIngredientsRecipe({ recipeId: id, ingredients }));
    },
    [dispatch, id]
  );
  return (
    <div className="col-span-full 2xl:col-span-6">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardSlim>
            <Step
              title="Ingredientes"
              step={4}
              icon={{
                kind: "outline",
                type: "ClipboardListIcon",
              }}
            >
              <CardSlimContent>
                <IngredientFields />
              </CardSlimContent>
              <CardSlimAction>
                <IngredientsButton />
              </CardSlimAction>
            </Step>
          </CardSlim>
        </form>
      </FormProvider>
    </div>
  );
};

export default IngredientsForm;
