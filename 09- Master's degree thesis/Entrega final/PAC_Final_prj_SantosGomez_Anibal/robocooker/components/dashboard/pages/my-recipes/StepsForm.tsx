import { RecipeDTO, Step as StepModel } from "@/models/recipe/recipe";
import { updateMyStepsRecipe } from "@/store/features/account/myRecipes/thunks";
import { useAppDispatch } from "@/store/hooks";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import Step from "components/common/Stepper/Step";
import React, { FC, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import StepsButton from "./StepsButton";
import StepsFields from "./StepsField";

type Props = {
  id: RecipeId;
  steps: RecipeDTO["steps"];
};

const StepsForm: FC<Props> = ({ steps, id }) => {
  const dispatch = useAppDispatch();
  const methods = useForm({
    defaultValues: {
      steps: steps.map(({ description, position }) => {
        return {
          description,
          position,
        };
      }),
    },
  });
  const { handleSubmit } = methods;
  const onSubmit = useCallback(
    (values: any) => {
      const steps = values.steps.filter(
        ({ description, position }: StepModel) => {
          return description && position;
        }
      );
      dispatch(updateMyStepsRecipe({ recipeId: id, steps }));
    },
    [dispatch, id]
  );
  return (
    <div className="col-span-full 2xl:col-span-6">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardSlim>
            <Step
              title="Preparación"
              step={5}
              icon={{
                kind: "outline",
                type: "CollectionIcon",
              }}
            >
              <CardSlimContent>
                <StepsFields />
              </CardSlimContent>
              <CardSlimAction>
                <StepsButton />
              </CardSlimAction>
            </Step>
          </CardSlim>
        </form>
      </FormProvider>
    </div>
  );
};

export default StepsForm;
