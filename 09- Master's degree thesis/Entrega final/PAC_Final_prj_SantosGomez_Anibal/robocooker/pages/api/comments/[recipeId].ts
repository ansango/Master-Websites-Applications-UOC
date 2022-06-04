import nc from "next-connect";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import {
  deleteComment,
  findAllCommentsByRecipeId,
  insertComment,
} from "@/api/db/comment";
import { Comment } from "@/models/comment";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  if (!req.query.recipeId) {
    return res.status(400).json({ error: "recipeId is required" });
  }

  const recipeId = req.query.recipeId;

  try {
    const comments = (await findAllCommentsByRecipeId(
      req.db,
      recipeId
    )) as Comment[];
    return res.json({ comments });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

handler.post(...auth, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!req.query.recipeId) {
    return res.status(400).json({ error: "recipeId is required" });
  }
  if (!req.body.comment) {
    return res.status(400).json({ error: "comment is required" });
  }
  const comment = req.body.comment;
  try {
    const newComment = await insertComment(req.db, comment);
    return res.json({ comment: newComment });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

handler.delete(...auth, async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  if (!req.query.recipeId) {
    return res.status(400).json({ error: "recipeId is required" });
  }
  if (!req.body.comment) {
    return res.status(400).json({ error: "commentId is required" });
  }
  const comment = req.body.comment as Comment;
  try {
    await deleteComment(req.db, comment._id);
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
