import nc from "next-connect";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { findAllCategories } from "@/api/db/category";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  try {
    const categories = await findAllCategories(req.db);
    return res.json({ categories });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
