import { selectUser } from "@/store/features/user";
import { useAppSelector } from "lib/store/hooks";
import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Icon from "../Icons/Icon";

const AddRecipe = () => {
  const { pathname } = useRouter();
  const user = useAppSelector(selectUser);
  return (
    <>
      {user && (
        <Link href="/dashboard/recipe-add" passHref>
          <div className="tooltip tooltip-left" data-tip="Crear receta">
            <button className="btn btn-ghost btn-circle">
              <Icon
                icon="PlusCircleIcon"
                kind="outline"
                className={
                  routeActive(pathname, "/dashboard/recipe-add")
                    ? "w-6 h-6 text-primary dark:text-primary-content"
                    : "w-6 h-6 text-gray-600 dark:text-base-content"
                }
              />
            </button>
          </div>
        </Link>
      )}
    </>
  );
};

export default AddRecipe;
