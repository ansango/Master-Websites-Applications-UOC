import { insertRecipe } from "@/api/db/recipe";
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
  const { recipe } = req.body;
  const recipeInserted = await insertRecipe(req.db, req.user.accountId, recipe);
  res.status(200).json({ recipe: recipeInserted });
});

export default handler;
