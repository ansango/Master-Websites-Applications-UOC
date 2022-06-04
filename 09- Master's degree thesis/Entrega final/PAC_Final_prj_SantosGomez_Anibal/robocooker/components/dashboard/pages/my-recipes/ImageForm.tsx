import { RecipeDTO } from "@/models/recipe/recipe";
import { updateMyPictureRecipe } from "@/store/features/account/myRecipes/thunks";
import { useAppDispatch } from "@/store/hooks";
import CardSlim from "components/common/Cards/Slim/CardSlim";
import CardSlimAction from "components/common/Cards/Slim/CardSlimAction";
import CardSlimContent from "components/common/Cards/Slim/CardSlimContent";
import { File, Form } from "components/common/Forms";
import Step from "components/common/Stepper/Step";
import Image from "next/image";
import { FC, useCallback } from "react";
import ImageButton from "./ImageButton";

type Props = {
  id: RecipeDTO["_id"];
  img: RecipeDTO["img"];
};

const ImageForm: FC<Props> = ({ img, id }) => {
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    (values: any) => {
      const image = values.file[0];
      const isImage = image ? image.type.startsWith("image") : null;
      if (image && isImage) {
        const formData = new FormData();
        formData.append("image", image);
        dispatch(updateMyPictureRecipe({ recipeId: id, file: formData }));
      }
    },
    [dispatch, id]
  );

  return (
    <div className="col-span-full md:col-span-6 lg:col-span-6 2xl:col-span-4">
      <Form onSubmit={onSubmit}>
        <CardSlim>
          <Step
            title="Foto de la receta"
            step={1}
            icon={{
              kind: "outline",
              type: "CameraIcon",
            }}
          >
            <CardSlimContent>
              <div className="space-y-4">
                {img && (
                  <div className="card w-full shadow-md image-full before:opacity-50 mt-4">
                    <figure className="w-full h-44 lg:h-40 relative">
                      {img && (
                        <Image
                          src={img}
                          loading="lazy"
                          alt="hero"
                          layout="fill"
                          className="object-center object-cover pointer-events-none"
                        />
                      )}
                    </figure>
                  </div>
                )}
                <File
                  name="file"
                  options={{
                    required: { value: true, message: "Añade una foto" },
                  }}
                />
              </div>
              <CardSlimAction>
                <ImageButton />
              </CardSlimAction>
            </CardSlimContent>
          </Step>
        </CardSlim>
      </Form>
    </div>
  );
};

export default ImageForm;
