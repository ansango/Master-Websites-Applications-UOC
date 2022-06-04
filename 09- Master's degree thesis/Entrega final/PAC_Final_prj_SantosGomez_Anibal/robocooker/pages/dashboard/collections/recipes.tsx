import { Recipe } from "@/models/recipe/recipe";
import { selectBookmarkRecipes } from "@/store/features/account/bookmark";
import { getBookmarkRecipes } from "@/store/features/account/bookmark/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Breadcrumb from "components/common/Breadcrumb/Breadcrumb";
import BreadcrumbLink from "components/common/Breadcrumb/BreadcrumbLink";
import BreadcrumbNoLink from "components/common/Breadcrumb/BreadcrumbNoLink";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import TableDesktop from "components/dashboard/pages/collections/TableDesktop";
import TableMobile from "components/dashboard/pages/collections/TableMobile";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

type Props = {};

const Recipes: NextPage = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectBookmarkRecipes) || [];
  useEffect(() => {
    dispatch(getBookmarkRecipes());
  }, [dispatch]);
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Colecciones" />
        <Breadcrumb>
          <BreadcrumbLink
            href="/dashboard/collections"
            label="Colecciones"
            icon={{ icon: "BookmarkIcon", kind: "outline" }}
          />
          <BreadcrumbNoLink
            label="Todas las recetas"
            icon={{ icon: "BookmarkAltIcon", kind: "outline" }}
          />
        </Breadcrumb>
        <div className="rounded-b-box shadow-sm">
          <div className="preview bg-base-100 rounded-b-box rounded-t-box p-5">
            <TableMobile recipes={recipes} />
            <TableDesktop recipes={recipes} />
          </div>
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Recipes;
