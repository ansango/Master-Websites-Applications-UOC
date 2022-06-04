import { CommentDAO } from "@/models/comment";
import { selectOnAddComment } from "@/store/features/comments";
import { addComment } from "@/store/features/comments/thunk";
import { selectRecipeId } from "@/store/features/recipes/recipe";
import { selectUserUsername } from "@/store/features/user";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";
import { Form, Input } from "components/common/Forms";
import { FC, useCallback } from "react";

type Props = {};

const CommentForm: FC = () => {
  const dispatch = useAppDispatch();
  const username = useAppSelector(selectUserUsername);
  const recipeId = useAppSelector(selectRecipeId);
  const loading = useAppSelector(selectOnAddComment);
  const onSubmit = useCallback(
    async ({ content }: any) => {
      if (username && recipeId) {
        const comment: CommentDAO = {
          author: username,
          content,
          recipeId,
          created: new Date(),
        };
        dispatch(addComment(comment));
      }
    },
    [dispatch, username, recipeId]
  );
  return (
    <Form onSubmit={onSubmit} className="grid gap-3 grid-cols-12">
      <div className="col-span-full sm:col-span-9 md:col-span-10">
        <Input
          type="text"
          name="content"
          placeholder="Escribe un comentario"
          options={{
            required: {
              value: true,
              message: "Escribe algo!",
            },
            minLength: {
              value: 5,
              message: "Mínimo 5 caracteres",
            },
            maxLength: {
              value: 200,
              message: "Máximo 200 caracteres",
            },
          }}
        />
      </div>
      <div className="col-span-full sm:col-span-3 md:col-span-2">
        <ButtonSubmit label="Enviar" isFull isLoading={loading} />
      </div>
    </Form>
  );
};

export default CommentForm;
