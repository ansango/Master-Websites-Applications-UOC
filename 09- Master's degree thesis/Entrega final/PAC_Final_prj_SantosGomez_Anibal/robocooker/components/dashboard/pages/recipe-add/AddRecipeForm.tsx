import { RecipeDAO } from "@/models/recipe/recipe";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Input, TextArea } from "components/common/Forms";
import { MultiSelect } from "components/common/Forms/MultiSelect";
import { useCallback, useState } from "react";
import Step from "components/common/Stepper/Step";
import { FormProvider, useForm } from "react-hook-form";
import IngredientFields from "./IngredientFields";
import StepsFields from "./StepsField";
import FileLarge from "components/common/Forms/FileLarge";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import { addMyRecipe } from "@/store/features/account/myRecipes/thunks";
import { useRouter } from "next/router";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import AddRecipeButton from "./AddRecipeButton";
import { selectAccount } from "@/store/features/account/account";
import { categoriesSelectMapper } from "@/mocks/categories";
import { blendersSelectMapper } from "@/mocks/blenders";

type Selector = {
  label: any;
  value: any;
};

const AddRecipeForm = () => {
  const [selectedCategories, setSelectedCategories] = useState<Selector[]>([]);
  const [selectedBlenders, setSelectedBlenders] = useState<Selector[]>([]);
  const dispatch = useAppDispatch();
  const accountId = useAppSelector(selectAccount)?._id;
  const methods = useForm({
    defaultValues: {
      ingredients: [],
      steps: [],
    },
  });
  const { handleSubmit } = methods;

  const { replace } = useRouter();

  const onSubmit = useCallback(
    async (values: any) => {
      if (!accountId) return;
      const image = values.file[0];
      const isImage = image ? image.type.startsWith("image") : null;
      if (image && isImage) {
        const formData = new FormData();
        formData.append("image", image);
        const recipe: RecipeDAO = {
          name: values.name,
          description: values.description,
          accountId,
          duration: values.duration,
          servings: values.servings,
          categories: selectedCategories.map(({ value }) => value),
          blenders: selectedBlenders.map(({ value }) => value),
          ingredients: values.ingredients.map((ingredient: any) => {
            return {
              name: ingredient.name,
              quantity: parseInt(ingredient.quantity),
              measure: ingredient.measure,
            };
          }),
          steps: values.steps,
        };

        const redirect = (id: string) => replace(`/recipe/${id}`);
        dispatch(addMyRecipe({ recipe, file: formData, redirect }));
      }
    },
    [dispatch, accountId, selectedCategories, selectedBlenders, replace]
  );

  return (
    <FormProvider {...methods}>
      <form
        className="grid gap-5 grid-cols-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-span-full lg:col-span-6">
          <CardSlim>
            <Step
              title="Información básica"
              step={1}
              icon={{
                kind: "outline",
                type: "DocumentIcon",
              }}
            >
              <CardSlimContent>
                <div className="grid gap-4 grid-cols-12">
                  <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
                    <Input
                      name="name"
                      label="Nombre"
                      type="text"
                      options={{
                        required: {
                          value: true,
                          message: "Introduce un nombre",
                        },
                      }}
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
                    <FileLarge
                      label="Imagen"
                      name="file"
                      options={{
                        required: {
                          value: true,
                          message: "Añade una imagen",
                        },
                      }}
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
                    <Input
                      name="servings"
                      type="number"
                      label="Raciones"
                      options={{
                        required: {
                          value: true,
                          message: "Introduce un número",
                        },
                      }}
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6 lg:col-span-full 2xl:col-span-6">
                    <Input
                      name="duration"
                      type="number"
                      label="Tiempo (mins)"
                      options={{
                        required: {
                          value: true,
                          message: "Introduce un número",
                        },
                      }}
                    />
                  </div>
                  <div className="col-span-full">
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
                    />
                  </div>
                </div>
              </CardSlimContent>
            </Step>
          </CardSlim>
        </div>
        <div className="col-span-full lg:col-span-6">
          <CardSlim>
            <Step
              title="Categorías"
              step={2}
              icon={{
                kind: "outline",
                type: "DocumentTextIcon",
              }}
            >
              <CardSlimContent>
                <div className="grid gap-4 grid-cols-12">
                  <div className="col-span-full sm:col-span-6 lg:col-span-full ">
                    <MultiSelect
                      label="Categorías"
                      options={categoriesSelectMapper}
                      value={selectedCategories}
                      onChange={setSelectedCategories}
                      labelledBy="Select"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6 lg:col-span-full ">
                    <MultiSelect
                      label="Robots de cocina"
                      options={blendersSelectMapper}
                      value={selectedBlenders}
                      onChange={setSelectedBlenders}
                      labelledBy="Select"
                    />
                  </div>
                </div>
              </CardSlimContent>
            </Step>
          </CardSlim>
        </div>
        <div className="col-span-full 2xl:col-span-6">
          <CardSlim>
            <Step
              title="Ingredientes"
              step={3}
              icon={{
                kind: "outline",
                type: "ClipboardListIcon",
              }}
            >
              <CardSlimContent>
                <IngredientFields />
              </CardSlimContent>
            </Step>
          </CardSlim>
        </div>
        <div className="col-span-full 2xl:col-span-6">
          <CardSlim>
            <Step
              title="Preparación"
              step={4}
              icon={{
                kind: "outline",
                type: "CollectionIcon",
              }}
            >
              <CardBasicContent>
                <StepsFields />
              </CardBasicContent>
            </Step>
          </CardSlim>
        </div>
        <div className="col-span-full">
          <div className="flex justify-end w-full">
            <AddRecipeButton />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddRecipeForm;
