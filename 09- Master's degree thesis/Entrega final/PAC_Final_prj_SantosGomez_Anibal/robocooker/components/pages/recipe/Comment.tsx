import { Comment } from "@/models/comment";
import { selectOnRemoveComment } from "@/store/features/comments";
import { removeComment } from "@/store/features/comments/thunk";
import { selectRecipeId } from "@/store/features/recipes/recipe";
import { selectUserUsername } from "@/store/features/user";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { formatDate } from "@/utils/date";
import { Avatar } from "components/common/Avatar";
import { Icon } from "components/common/Icons";
import Link from "next/link";
import { FC, useCallback } from "react";

type Props = {
  comment: Comment;
};

const CommentC: FC<Props> = ({ comment }) => {
  const currentUser = useAppSelector(selectUserUsername);
  const isOwner = currentUser === comment.author;
  const loading = useAppSelector(selectOnRemoveComment);
  const dispatch = useAppDispatch();
  const onRemove = useCallback(() => {
    if (currentUser && comment._id) {
      dispatch(removeComment(comment));
    }
  }, [dispatch, currentUser, comment]);
  const cnRemove =
    loading && comment._id
      ? "btn btn-sm btn-ghost btn-circle loading"
      : "btn btn-sm btn-ghost btn-circle";

  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center space-x-1">
        <div className="sm:flex sm:items-center sm:justify-between md:space-x-2 w-full">
          <div className="space-x-2 flex items-center">
            <Link href={`/profile/${comment.author}`} passHref>
              <button className="btn btn-ghost btn-circle">
                <Avatar size="xs" username={currentUser ?? "R"} />
              </button>
            </Link>
            <Link href={`/profile/${comment.author}`}>
              <a className="font-medium hover:underline">@{comment.author}</a>
            </Link>
          </div>

          <span className="text-xs text-gray-500 dark:text-gray-600">
            {formatDate(comment.created)}
          </span>
        </div>
        {isOwner && (
          <button className={cnRemove} onClick={onRemove}>
            {!loading && (
              <Icon icon="TrashIcon" kind="outline" className="w-5 h-5" />
            )}
          </button>
        )}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-500">
        {comment.content}
      </p>
      <hr className="bg-gray-100"></hr>
    </div>
  );
};

export default CommentC;
