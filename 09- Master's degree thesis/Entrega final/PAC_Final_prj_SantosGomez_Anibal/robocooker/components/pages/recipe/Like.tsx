import { onLikeRecipeService } from "@/services/account";
import {
addFavoriteRecipe,  
  selectAccountId,
} from "@/store/features/account/account";
import { likeRecipe, selectRecipeId } from "@/store/features/recipes/recipe";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import Spinner from "components/common/Spinner/Spinner";
import { FC, useCallback, useState } from "react";

type Props = {};

const Like: FC = () => {
  const recipeId = useAppSelector(selectRecipeId);
  const accountId = useAppSelector(selectAccountId);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const onLike = useCallback(async () => {
    setIsLoading(true);
    try {
      await onLikeRecipeService(recipeId);
      dispatch(likeRecipe(accountId));
      dispatch(addFavoriteRecipe(recipeId));
    } catch (error) {}
    setIsLoading(false);
  }, [recipeId, accountId, dispatch]);
  return (
    <button
      className="btn btn-circle btn-ghost text-secondary"
      onClick={onLike}
    >
      {!isLoading && (
        <Icon icon="HeartIcon" kind="outline" className="w-6 h-6" />
      )}
      {isLoading && <Spinner className="h-6 w-6 text-secondary" />}
    </button>
  );
};

export default Like;
