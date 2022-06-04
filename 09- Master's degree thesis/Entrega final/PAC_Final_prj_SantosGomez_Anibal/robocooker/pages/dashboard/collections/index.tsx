import {
  selectBookmarkTotalRecipes,
  selectCollections,
} from "@/store/features/account/bookmark";
import {
  getBookmark,
  getBookmarkCollections,
} from "@/store/features/account/bookmark/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ModalOpen from "components/common/Modal/ModalOpen";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import CreateCollection from "components/dashboard/pages/collections/CreateCollection";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import Link from "next/link";
import React, { useEffect } from "react";

const Collections: NextPage = () => {
  const dispatch = useAppDispatch();
  const collections = useAppSelector(selectCollections) || [];
  useEffect(() => {
    dispatch(getBookmark());
    dispatch(getBookmarkCollections());
  }, [dispatch]);
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Colecciones" />
        <div className="flex w-full justify-end">
          <ModalOpen
            id="create-collection"
            className="btn btn-circle btn-primary btn-sm"
          >
            <Icon kind="outline" icon="PlusIcon" className="w-4 h-4" />
          </ModalOpen>
        </div>
        <div className="grid grid-cols-12 gap-5 sm:gap-7">
          <Link href="/dashboard/collections/recipes">
            <a className="stack col-span-full sm:col-span-6 md:col-span-4 xl:col-span-3">
              <div className="text-center shadow-md card card-compact bg-base-100">
                <div className="card-body text-sm font-medium">
                  <p className="line-clamp-1">Todas las recetas</p>
                </div>
              </div>
              <div className="text-center shadow card card-compact bg-base-100">
                <div className="card-body">B</div>
              </div>
              <div className="text-center shadow-sm card card-compact bg-base-200">
                <div className="card-body">C</div>
              </div>
            </a>
          </Link>

          {collections.length > 0 ? (
            <>
              {collections.map(({ name, _id }) => (
                <Link key={_id} href={`/dashboard/collections/${_id}`}>
                  <a className="stack col-span-full sm:col-span-6 md:col-span-4 xl:col-span-3">
                    <div className="text-center shadow-md card card-compact bg-base-100">
                      <div className="card-body text-sm font-medium">
                        <p className="line-clamp-1">
                          <span>{name}</span>
                        </p>
                      </div>
                    </div>
                    <div className="text-center shadow card card-compact bg-base-100">
                      <div className="card-body">B</div>
                    </div>
                    <div className="text-center shadow-sm card card-compact bg-base-200">
                      <div className="card-body">C</div>
                    </div>
                  </a>
                </Link>
              ))}
            </>
          ) : null}
        </div>

        <CreateCollection id="create-collection" />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Collections;
