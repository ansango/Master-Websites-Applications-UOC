import { findAllRecipesPopulated } from "@/api/db/recipe";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);

handler.use(database);

handler.get(async (req, res) => {
  try {
    const data = await findAllRecipesPopulated(req.db);
    return res.json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
