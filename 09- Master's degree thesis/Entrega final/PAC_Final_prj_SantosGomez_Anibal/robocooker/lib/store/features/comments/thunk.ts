import { Comment, CommentDAO } from "@/models/comment";
import {
  onDeleteCommentService,
  onGetCommentsService,
  onPostCommentService,
} from "@/services/comments";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getComments = createAsyncThunk(
  "comments/getComments",
  async (recipeId: RecipeId) => {
    const response = await onGetCommentsService(recipeId);
    return response;
  }
);

export const addComment = createAsyncThunk(
  "comments/addComment",
  async (comment: CommentDAO) => {
    const response = await onPostCommentService(comment);
    return response;
  }
);

export const removeComment = createAsyncThunk(
  "comments/removeComment",
  async (comment: Comment) => {
    await onDeleteCommentService(comment);
    return comment;
  }
);
