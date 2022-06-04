import { selectRecipes } from "@/store/features/account/collection";
import { useAppSelector } from "@/store/hooks";
import SubRoute from "components/layout/SubRoute";
import { FC } from "react";
import TableDesktop from "./TableDesktop";
import TableMobile from "./TableMobile";
const TabRecipes: FC = () => {
  const recipes = useAppSelector(selectRecipes) || [];

  return (
    <SubRoute>
      <TableMobile recipes={recipes} />
      <TableDesktop recipes={recipes} />
    </SubRoute>
  );
};

export default TabRecipes;
