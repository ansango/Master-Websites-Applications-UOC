import {
  deleteRecipeById,
  findRecipeByIdPopulated,
  insertRecipe,
} from "@/api/db/recipe";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.query) {
    res.status(400).json({ error: "Bad request" });
    return;
  }
  try {
    const { id } = req.query;
    const recipe = await findRecipeByIdPopulated(req.db, id);
    return res.status(200).json({ recipe });
  } catch (error) {
    return res.status(500).json({ error: "Internal server error" });
  }
});

handler.delete(async (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  const { id } = req.query as RecipeId;
  if (!id) {
    res.status(400).json({ error: "Missing id" });
    return;
  }
  try {
    const recipeDeleted = await deleteRecipeById(
      req.db,
      id,
      req.user.accountId.toString()
    );
    if (!recipeDeleted) {
      res.status(404).json({ error: "Error trying to delete recipe" });
      return;
    }
    return res.status(204).end();
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
