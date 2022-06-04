import { selectFavorites } from "@/store/features/account/account";
import { selectRecipeId } from "@/store/features/recipes/recipe";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import Like from "./Like";
import UnLike from "./UnLike";

type Props = {};

const ActionLike: FC<Props> = () => {
  const favorites = useAppSelector(selectFavorites);
  const recipeId = useAppSelector(selectRecipeId);
  const isLiked = favorites.includes(recipeId);
  return (
    <>
      {isLiked && <UnLike />} {!isLiked && <Like />}
    </>
  );
};

export default ActionLike;
