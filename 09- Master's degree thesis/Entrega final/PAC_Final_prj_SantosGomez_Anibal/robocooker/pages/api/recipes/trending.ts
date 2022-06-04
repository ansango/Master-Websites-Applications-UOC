import { findMostLikedRecipes } from "@/api/db/recipe";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  const limit = parseInt(req.query.limit as string, 12) || 12;
  try {
    const recipes = await findMostLikedRecipes(req.db, limit);
    return res.json({ recipes });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
