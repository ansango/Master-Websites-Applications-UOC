import { findLastRecipesPopulated } from "@/api/db/recipe";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);

handler.use(database);

handler.get(async (req, res) => {
  if (!req.query.limit) {
    res.status(400).json({ error: "Bad Request" });
  }

  try {
    const limit = parseInt(req.query.limit as string);
    const data = await findLastRecipesPopulated(req.db, limit);
    return res.json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
