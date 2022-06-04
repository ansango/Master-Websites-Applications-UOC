import { findTrendingAccounts } from "@/api/db/account";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";

import nc from "next-connect";

const handler = nc(options);

handler.use(database);

handler.get(async (req, res) => {
  try {
    const users = await findTrendingAccounts(req.db, 7);
    return res.json({ users });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
