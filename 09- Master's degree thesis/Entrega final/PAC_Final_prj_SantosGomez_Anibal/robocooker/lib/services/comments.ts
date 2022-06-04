import { Comment, CommentDAO } from "@/models/comment";
import fetcher from "@/utils/fetcher";

export const onGetCommentsService = async (
  recipeId: RecipeId
): Promise<Comment[]> => {
  try {
    const response = await fetcher(`/api/comments/${recipeId}`, {
      method: "GET",
    });
    return response.comments;
  } catch (error) {
    throw error;
  }
};

export const onPostCommentService = async (
  comment: CommentDAO
): Promise<Comment> => {
  try {
    const response = await fetcher(`/api/comments/${comment.recipeId}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });
    return response.comment;
  } catch (error) {
    throw error;
  }
};

export const onDeleteCommentService = async (
  comment: Comment
): Promise<void> => {
  try {
    await fetcher(`/api/comments/${comment.recipeId}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment }),
    });
  } catch (error) {
    throw error;
  }
};
