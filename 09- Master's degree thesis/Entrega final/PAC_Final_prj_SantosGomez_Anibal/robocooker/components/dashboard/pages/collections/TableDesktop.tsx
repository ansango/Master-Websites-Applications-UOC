import { Recipe } from "@/models/recipe/recipe";
import { Collection } from "@/models/user/bookmark";
import {
  selectCollection,
  selectOnEditCollection,
} from "@/store/features/account/collection";
import { editCollection } from "@/store/features/account/collection/thunks";
import { useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import Image from "next/image";
import Link from "next/link";
import { FC, useCallback } from "react";
import { useDispatch } from "react-redux";

type Props = {
  recipes: Recipe[];
};

const TableDesktop: FC<Props> = ({ recipes }) => {
  const collection = useAppSelector(selectCollection);
  const dispatch = useDispatch();
  const isLoading = useAppSelector(selectOnEditCollection) === true;
  const cn = isLoading
    ? "btn btn-error btn-sm btn-circle loading"
    : "btn btn-error btn-sm btn-circle";
  const handleDelete = useCallback(
    (id: RecipeId) => {
      if (collection) {
        const data: Collection = {
          ...collection,
          recipes: collection.recipes
            .filter((recipe) => recipe._id !== id)
            .map((recipe) => recipe._id),
        };
        dispatch(editCollection(data));
      }
    },
    [collection, dispatch]
  );
  return (
    <div className="hidden sm:block overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Rac</th>
            <th>Tiempo</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {recipes.length > 0 ? (
            <>
              {recipes.map(
                (
                  {
                    _id,
                    img,
                    name,
                    description,
                    duration,
                    servings,
                    blenders,
                    categories,
                  },
                  i
                ) => (
                  <tr key={i}>
                    <th>
                      <Link href={`/recipe/${_id}`} passHref>
                        <button className="btn btn-ghost btn-sm btn-circle">
                          <Icon
                            icon="EyeIcon"
                            kind="outline"
                            className="w-5 h-5 text-primary"
                          />
                        </button>
                      </Link>
                    </th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <Image
                              src={img}
                              loading="lazy"
                              alt="hero"
                              layout="fill"
                              className="object-center object-cover pointer-events-none"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{name}</div>
                          <div className="text-sm opacity-50 capitalize">
                            {blenders.length > 0 && blenders[0]}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="max-w-xs">
                      <p className="truncate">{description}</p>
                      {categories.slice(0, 3).map((category, i) => (
                        <span
                          key={i}
                          className="badge badge-ghost badge-sm capitalize mr-1"
                        >
                          {category}
                        </span>
                      ))}
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm capitalize">
                        <Icon
                          icon="UserGroupIcon"
                          kind="outline"
                          className="w-4 h-4 mr-1"
                        />
                        {servings}
                      </span>
                    </td>
                    <td>
                      <span className="badge badge-ghost badge-sm capitalize mr-1">
                        <Icon
                          icon="ClockIcon"
                          kind="outline"
                          className="w-4 h-4 mr-1"
                        />
                        {duration}
                      </span>
                    </td>
                    <th>
                      <button className={cn} onClick={() => handleDelete(_id)}>
                        {!isLoading && (
                          <Icon
                            icon="XIcon"
                            kind="outline"
                            className="w-4 h-4"
                          />
                        )}
                      </button>
                    </th>
                  </tr>
                )
              )}
            </>
          ) : null}
        </tbody>
      </table>
    </div>
  );
};

export default TableDesktop;
