import { selectRecipe } from "@/store/features/recipes/recipe";
import { useAppSelector } from "@/store/hooks";
import { formatDate } from "@/utils/date";
import { Avatar } from "components/common/Avatar";
import Link from "next/link";
import { FC } from "react";

const Author: FC = () => {
  const recipe = useAppSelector(selectRecipe);

  return (
    <>
      {recipe && (
        <div className="flex items-center space-x-2">
          <div className="flex items-center">
            <Link href={`/profile/${recipe.account.username}`} passHref>
              <button className="btn btn-circle btn-ghost">
                <Avatar
                  size="xs"
                  imgUrl={recipe.account.avatar}
                  username={recipe.account.username}
                />
              </button>
            </Link>
          </div>
          <div>
            <div className="font-semibold text-sm">
              @{recipe.account.username}
            </div>
            <div className="text-xs text-gray-700 dark:text-gray-500">
              {formatDate(recipe.created)}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Author;
