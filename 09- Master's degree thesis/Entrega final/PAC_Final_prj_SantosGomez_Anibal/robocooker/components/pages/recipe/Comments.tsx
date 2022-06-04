import { selectComments } from "@/store/features/comments";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import CommentC from "./Comment";

type Props = {};

const Comments: FC<Props> = () => {
  const comments = useAppSelector(selectComments);

  return (
    <div className="space-y-4">
      {comments && comments.length > 0 ? (
        comments.map((comment, i) => <CommentC key={i} comment={comment} />)
      ) : (
        <p className="p-5 bg-base-200 rounded-lg font-medium">
          Parece que nadie ha comentado esta receta aún. ¡Sé el primero!
        </p>
      )}
    </div>
  );
};

export default Comments;
