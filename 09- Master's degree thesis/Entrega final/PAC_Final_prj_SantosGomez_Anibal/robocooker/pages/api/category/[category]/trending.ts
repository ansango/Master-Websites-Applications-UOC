import { findPopularRecipesByCategory } from "@/api/db/category";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);

handler.use(database);

handler.get(async (req, res) => {
  if (!req.query.category) {
    res.status(400).json({ error: "category is required" });
  }

  try {
    const recipes = await findPopularRecipesByCategory(
      req.db,
      req.query.category as string,
      4
    );
    return res.json({ recipes });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
