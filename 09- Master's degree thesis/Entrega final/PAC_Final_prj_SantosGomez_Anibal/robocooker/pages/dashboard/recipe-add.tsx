import { NextPage } from "next";

import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import AddRecipeForm from "components/dashboard/pages/recipe-add/AddRecipeForm";

const AddRecipe: NextPage = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Crea una receta!" />

        <AddRecipeForm />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default AddRecipe;
