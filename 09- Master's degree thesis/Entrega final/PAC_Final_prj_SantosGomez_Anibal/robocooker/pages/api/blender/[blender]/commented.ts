import { findMostCommentedRecipesByBlender } from "@/api/db/blender";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);

handler.use(database);

handler.get(async (req, res) => {
  if (!req.query.blender) {
     res.status(400).json({ error: "blender is required" });
  }

  try {
    const recipes = await findMostCommentedRecipesByBlender(
      req.db,
      req.query.blender as string,
      4
    );
    return res.json({ recipes });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
