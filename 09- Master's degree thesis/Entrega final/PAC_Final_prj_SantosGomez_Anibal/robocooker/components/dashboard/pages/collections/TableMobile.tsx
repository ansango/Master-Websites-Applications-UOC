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

const TableMobile: FC<Props> = ({ recipes }) => {
  const collection = useAppSelector(selectCollection);
  const isLoading = useAppSelector(selectOnEditCollection) === true;
  const cn = isLoading
    ? "btn btn-error btn-sm btn-circle loading"
    : "btn btn-error btn-sm btn-circle";
  const dispatch = useDispatch();
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
    <div className="w-full sm:hidden">
      {recipes.length > 0 ? (
        <div className="space-y-3">
          {recipes.map(({ _id, img, name, blenders }) => (
            <div key={_id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Link href={`/recipe/${_id}`} passHref>
                  <button className="btn btn-ghost btn-sm btn-circle">
                    <Icon
                      icon="EyeIcon"
                      kind="outline"
                      className="w-5 h-5 text-primary"
                    />
                  </button>
                </Link>
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
              <button className={cn} onClick={() => handleDelete(_id)}>
                {!isLoading && (
                  <Icon icon="XIcon" kind="outline" className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TableMobile;
