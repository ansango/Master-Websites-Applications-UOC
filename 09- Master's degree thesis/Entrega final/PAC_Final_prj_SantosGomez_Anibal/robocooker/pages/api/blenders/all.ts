import nc from "next-connect";
import { database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { findAllBlenders } from "@/api/db/blender";

const handler = nc(options);
handler.use(database);

handler.get(async (req, res) => {
  try {
    const blenders = await findAllBlenders(req.db);
    return res.json({ blenders });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
