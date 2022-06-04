import {
  selectFavorites,
  selectFavoritesStatus,
} from "@/store/features/account/favorites";
import { getFavorites } from "@/store/features/account/favorites/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import { Icon } from "components/common/Icons";
import ModalOpen from "components/common/Modal/ModalOpen";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DeleteFavorite from "components/dashboard/pages/favorites/DeleteFavorite";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Favorites: NextPage = () => {
  const favorites = useAppSelector(selectFavorites);
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectFavoritesStatus) === "loading";
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);
  const [idRecipe, setIdRecipe] = useState("");
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <>
          <GenericDashboardHero title="Favoritos" />
          {!loading && favorites && (
            <ul className="grid gap-5 max-w-sm mx-auto sm:max-w-none sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
              {favorites.map(({ _id, img, name }) => (
                <li key={_id}>
                  <div className="card w-full shadow-xl image-full before:opacity-50">
                    <figure className="w-full h-32 relative">
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
                    <div className="card-body p-5 justify-between">
                      <Link href={`/recipe/${_id}`} passHref>
                        <h2 className="card-title capitalize text-white hover:underline hover:cursor-pointer line-clamp-1">
                          {name}
                        </h2>
                      </Link>
                      <div className="w-full flex justify-end space-x-2">
                        <ModalOpen
                          className="btn btn-sm btn-error btn-circle"
                          id="delete-favorite"
                        >
                          <span onClick={() => setIdRecipe(_id)}>
                            <Icon
                              icon="XIcon"
                              className="w-4 h-4"
                              kind="outline"
                            />
                          </span>
                        </ModalOpen>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <DeleteFavorite id="delete-favorite" idRecipe={idRecipe} />
        </>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Favorites;
