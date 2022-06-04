import { updateAccountDislikesById } from "@/api/db/account";
import {
  findRecipeLikedByAccountId,
  updateRecipeDislikesById,
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
  const recipeId = req.body.recipeId;
  const accountId = req.user.accountId;
  const isLiked = await findRecipeLikedByAccountId(req.db, recipeId, accountId);

  if (isLiked) {
    const recipeDislike = await updateRecipeDislikesById(
      req.db,
      recipeId,
      accountId
    );

    const accountDislike = await updateAccountDislikesById(
      req.db,
      accountId,
      recipeId
    );

    if (!accountDislike || !recipeDislike) {
      res.status(404).json({ error: "Recipe or account not found" });
      return;
    }

    res.status(204).end();
  } else {
    res.status(400).json({ error: "Recipe not liked" });
  }
});

export default handler;
