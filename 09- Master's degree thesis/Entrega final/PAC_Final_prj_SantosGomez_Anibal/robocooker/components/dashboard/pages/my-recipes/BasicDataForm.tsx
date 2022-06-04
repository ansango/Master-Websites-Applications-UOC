import { RecipeDTO } from "@/models/recipe/recipe";
import { updateMyInfoRecipe } from "@/store/features/account/myRecipes/thunks";
import { useAppDispatch } from "@/store/hooks";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { Form, Input, TextArea } from "components/common/Forms";
import Step from "components/common/Stepper/Step";
import { FC, useCallback } from "react";
import BasicDataButton from "./BasicDataButton";

type Props = {
  recipe: RecipeDTO;
};

const BasicDataForm: FC<Props> = ({ recipe }) => {
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    (values: any) => {
      dispatch(
        updateMyInfoRecipe({
          recipeId: recipe._id,
          name: values.name,
          description: values.description,
          duration: values.duration,
          servings: values.servings,
        })
      );
    },
    [dispatch, recipe]
  );
  return (
    <div className="col-span-full md:col-span-6 lg:col-span-6 2xl:col-span-4">
      <Form onSubmit={onSubmit}>
        <CardSlim>
          <Step
            title="Información básica"
            step={2}
            icon={{
              kind: "outline",
              type: "DocumentIcon",
            }}
          >
            <CardSlimContent>
              <Input
                name="name"
                label="Nombre"
                type="text"
                options={{
                  required: { value: true, message: "Introduce un nombre" },
                }}
                {...{ defaultValue: recipe.name }}
              />
              <Input
                name="servings"
                type="number"
                label="Raciones"
                options={{
                  required: { value: true, message: "Introduce un número" },
                }}
                {...{ defaultValue: recipe.servings }}
              />
              <Input
                name="duration"
                type="number"
                label="Tiempo (mins)"
                options={{
                  required: { value: true, message: "Introduce un número" },
                }}
                {...{ defaultValue: recipe.duration }}
              />
              <TextArea
                name="description"
                label="Descripción"
                options={{
                  required: {
                    value: true,
                    message: "Introduce una descripción",
                  },
                  minLength: {
                    value: 135,
                    message: "Al menos 135 caracteres",
                  },
                }}
                {...{ defaultValue: recipe.description }}
              />

              <CardSlimAction>
                <BasicDataButton />
              </CardSlimAction>
            </CardSlimContent>
          </Step>
        </CardSlim>
      </Form>
    </div>
  );
};

export default BasicDataForm;
