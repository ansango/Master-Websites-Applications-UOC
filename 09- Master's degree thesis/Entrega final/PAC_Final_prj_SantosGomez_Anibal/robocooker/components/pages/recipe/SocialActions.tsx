import {
  selectBookmark,
  selectBookmarkRecipes,
  selectBookmarkStatus,
} from "@/store/features/account/bookmark";
import { saveRecipeBookmark } from "@/store/features/account/bookmark/thunks";
import { selectRecipeId } from "@/store/features/recipes/recipe";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import Spinner from "components/common/Spinner/Spinner";
import { FC } from "react";
import ActionLike from "./ActionLike";

const AddBookmark: FC = () => {
  const bookmark = useAppSelector(selectBookmark);
  const dispatch = useAppDispatch();
  const recipeId = useAppSelector(selectRecipeId);
  const isLoading = useAppSelector(selectBookmarkStatus) === "loading";
  const action = () => {
    if (bookmark && recipeId) {
      dispatch(
        saveRecipeBookmark({
          ...bookmark,
          recipes: [...bookmark.recipes, recipeId],
        })
      );
    }
  };
  return (
    <button className="btn btn-circle btn-ghost" onClick={action}>
      {!isLoading && (
        <Icon
          icon="BookmarkIcon"
          kind="outline"
          className="w-6 h-6 text-accent-focus"
        />
      )}
      {isLoading && <Spinner className="h-6 w-6 text-accent-focus" />}
    </button>
  );
};

const RemoveBookmark: FC = () => {
  const bookmark = useAppSelector(selectBookmark);
  const isLoading = useAppSelector(selectBookmarkStatus) === "loading";
  const dispatch = useAppDispatch();
  const recipeId = useAppSelector(selectRecipeId);
  const action = () => {
    if (bookmark && recipeId) {
      const newRecipesIds = bookmark.recipes.filter((id) => id !== recipeId);
      dispatch(
        saveRecipeBookmark({
          ...bookmark,
          recipes: newRecipesIds,
        })
      );
    }
  };

  return (
    <button className="btn btn-circle btn-ghost" onClick={action}>
      {!isLoading && (
        <Icon
          icon="BookmarkIcon"
          kind="outline"
          className="w-6 h-6 text-accent-focus fill-accent-focus"
        />
      )}
      {isLoading && <Spinner className="h-6 w-6 text-accent-focus" />}
    </button>
  );
};

const ActionBookmark: FC = () => {
  const recipeId = useAppSelector(selectRecipeId);
  const bookmarkedRecipes = useAppSelector(selectBookmark)?.recipes;
  const isBookmarked =
    bookmarkedRecipes &&
    bookmarkedRecipes.filter((id) => id === recipeId).length > 0;

  return (
    <>
      {isBookmarked && <RemoveBookmark />} {!isBookmarked && <AddBookmark />}
    </>
  );
};
const SocialActions: FC = () => {
  return (
    <div className="space-x-1">
      <ActionLike />
      <ActionBookmark />
    </div>
  );
};

export default SocialActions;
