import { selectAccountId } from "@/store/features/account/account";
import { selectRecipeAccountId } from "@/store/features/recipes/recipe";
import { useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import Link from "next/link";
import { FC } from "react";

type Props = {
  id: RecipeId;
};

const Options: FC<Props> = ({ id }) => {
  const recipeAccountId = useAppSelector(selectRecipeAccountId);
  const accountId = useAppSelector(selectAccountId);
  const isOwner = accountId === recipeAccountId;
  return (
    <>
      {isOwner && (
        <Link href={`/dashboard/my-recipes/${id}`}>
          <a className="btn btn-ghost btn-circle btn-sm">
            <Icon
              icon="DotsHorizontalIcon"
              kind="outline"
              className="w-4 h-4"
            />
          </a>
        </Link>
      )}
    </>
  );
};

export default Options;
