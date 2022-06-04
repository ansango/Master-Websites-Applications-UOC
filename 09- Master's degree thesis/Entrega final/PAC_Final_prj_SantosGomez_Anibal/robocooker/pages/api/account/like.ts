import { updateAccountLikesById } from "@/api/db/account";
import {
  findRecipeLikedByAccountId,
  updateRecipeLikesById,
} from "@/api/db/recipe";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

const handler = nc(options);

handler.use(database, ...auth);

handler.post(async (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }

  if (!req.body.recipeId) {
    res.status(400).json({ error: "Missing recipeId" });
    return;
  }
  const recipeId = req.body.recipeId;
  const accountId = req.user.accountId;

  const isLiked = await findRecipeLikedByAccountId(req.db, recipeId, accountId);

  if (isLiked) {
    res.status(400).json({ error: "Recipe already liked" });
    return;
  }

  const recipeLike = await updateRecipeLikesById(req.db, recipeId, accountId);
  const accountLike = await updateAccountLikesById(req.db, accountId, recipeId);
  if (!accountLike || !recipeLike) {
    res.status(404).json({ error: "Recipe or account not found" });
    return;
  }

  res.status(204).end();
});

export default handler;
