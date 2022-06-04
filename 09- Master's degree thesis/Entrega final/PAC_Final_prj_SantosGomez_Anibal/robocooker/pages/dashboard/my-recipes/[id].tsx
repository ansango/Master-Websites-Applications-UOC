import { selectMyRecipes } from "@/store/features/account/myRecipes";
import { getMyRecipes } from "@/store/features/account/myRecipes/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ModalOpen from "components/common/Modal/ModalOpen";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import BasicDataForm from "components/dashboard/pages/my-recipes/BasicDataForm";
import CategoriesForm from "components/dashboard/pages/my-recipes/CategoriesForm";
import ImageForm from "components/dashboard/pages/my-recipes/ImageForm";
import IngredientsForm from "components/dashboard/pages/my-recipes/IngredientsForm";
import StepsForm from "components/dashboard/pages/my-recipes/StepsForm";
import DashboardLayout from "components/layout/DashboardLayout";
import DeleteRecipe from "components/dashboard/pages/my-recipes/DeleteRecipe";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Edit: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const recipe = useAppSelector(selectMyRecipes)?.find(({ _id }) => _id === id);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!recipe) {
      dispatch(getMyRecipes());
    }
  }, [dispatch, recipe]);
  if (!recipe) return null;
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Editar receta" />
        <div className="flex justify-between">
          <Breadcrumb>
            <BreadcrumbLink
              href="/dashboard/my-recipes"
              label="Mis recetas"
              icon={{
                icon: "BookOpenIcon",
                kind: "outline",
              }}
            />
            <BreadcrumbNoLink
              label={recipe.name}
              icon={{
                icon: "ClipboardIcon",
                kind: "outline",
              }}
            />
          </Breadcrumb>
          <ModalOpen
            className="btn btn-sm btn-error btn-circle"
            id="delete-recipe"
          >
            <Icon icon="XIcon" className="w-4 h-4" kind="outline" />
          </ModalOpen>
        </div>
        <div className="grid gap-5 grid-cols-12">
          <ImageForm img={recipe.img} id={recipe._id} />
          <BasicDataForm recipe={recipe} />
          <CategoriesForm recipe={recipe} />
          <IngredientsForm ingredients={recipe.ingredients} id={recipe._id} />
          <StepsForm steps={recipe.steps} id={recipe._id} />
        </div>

        <DeleteRecipe id="delete-recipe" idRecipe={recipe._id} />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Edit;
