import { findRecipesByAccountId } from "@/api/db/recipe";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);

handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const data = await findRecipesByAccountId(req.db, req.user.accountId);
    return res.json({ data });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
