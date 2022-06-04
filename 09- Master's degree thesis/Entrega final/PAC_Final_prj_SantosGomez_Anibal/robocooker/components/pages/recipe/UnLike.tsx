import { onUnlikeRecipeService } from "@/services/account";
import {
  removeFavoriteRecipe,
  selectAccountId,
} from "@/store/features/account/account";
import { selectRecipeId, unlikeRecipe } from "@/store/features/recipes/recipe";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import Spinner from "components/common/Spinner/Spinner";
import { FC, useCallback, useState } from "react";

type Props = {};

const UnLike: FC<Props> = () => {
  const recipeId = useAppSelector(selectRecipeId);
  const accountId = useAppSelector(selectAccountId);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const onUnLike = useCallback(async () => {
    setIsLoading(true);
    try {
      await onUnlikeRecipeService(recipeId);
      dispatch(unlikeRecipe(accountId));
      dispatch(removeFavoriteRecipe(recipeId));
    } catch (error) {}
    setIsLoading(false);
  }, [recipeId, accountId, dispatch]);
  return (
    <button
      className="btn btn-circle btn-ghost text-secondary"
      onClick={onUnLike}
    >
      {!isLoading && <Icon icon="HeartIcon" kind="solid" className="w-6 h-6" />}
      {isLoading && <Spinner className="h-6 w-6 text-secondary"/>}
    </button>
  );
};

export default UnLike;
