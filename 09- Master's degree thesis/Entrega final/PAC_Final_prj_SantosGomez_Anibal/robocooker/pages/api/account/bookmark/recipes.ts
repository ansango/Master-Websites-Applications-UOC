import { findAccountByUserId } from "@/api/db/account";
import {
  findBookmarkById,
  findBookmarkedRecipesByIds,
  updateRecipesBookmark,
} from "@/api/db/bookmark";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Recipe } from "@/models/recipe/recipe";
import { Bookmark } from "@/models/user/bookmark";
import { Account } from "@/models/user/user";

import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  const account = (await findAccountByUserId(
    req.db,
    req.user.accountId
  )) as Account;
  if (!account) return res.status(404).json({ error: "Account not found" });
  const { bookmark: bookmarkId } = account;
  const { recipes: recipesIds } = (await findBookmarkById(
    req.db,
    bookmarkId
  )) as Bookmark;
  if (!recipesIds || recipesIds.length === 0)
    return res.status(404).json({ error: "Recipes not found" });
  const recipes = (await findBookmarkedRecipesByIds(
    req.db,
    recipesIds
  )) as Recipe[];
  if (!recipes || recipes.length === 0)
    return res.status(404).json({ error: "Recipes not found" });
  return res.json({ recipes });
});

handler.patch(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.body.bookmark)
    return res.status(404).json({ error: "Bookmark not found" });
  const { _id, recipes } = req.body.bookmark as Bookmark;
  try {
    await updateRecipesBookmark(req.db, _id, recipes);
    return res.json({ bookmark: req.body.bookmark });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
