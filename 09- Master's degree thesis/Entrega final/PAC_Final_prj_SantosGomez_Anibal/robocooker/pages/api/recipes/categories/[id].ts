import { findRecipeById, updateRecipeCategoriesById } from "@/api/db/recipe";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Recipe } from "@/models/recipe/recipe";
import nc from "next-connect";

const handler = nc(options);

handler.use(database, ...auth);

handler.patch(async (req, res) => {
  if (!req.user) {
    res.status(401).json({ error: "Unauthorized" });
    return;
  }
  if (!req.query.id) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }
  const content = req.body as {
    categories: Recipe["categories"];
    blenders: Recipe["blenders"];
  };
  if (!content) {
    res.status(400).json({ error: "Bad Request" });
    return;
  }

  const recipe = (await findRecipeById(req.db, req.query.id)) as Recipe;

  if (!recipe) {
    res.status(404).json({ error: "Recipe not found" });
    return;
  }

  try {
    await updateRecipeCategoriesById(req.db, req.query.id, content);
    return res.status(200).json({ recipe: { ...recipe, ...content } });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
