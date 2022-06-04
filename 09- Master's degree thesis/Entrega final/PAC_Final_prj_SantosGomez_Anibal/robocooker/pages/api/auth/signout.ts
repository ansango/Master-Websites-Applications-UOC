import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import nc from "next-connect";

const handler = nc(options);

handler.use(database, ...auth);

handler.delete(async (req, res) => {
  await req.session.destroy();
  res.status(204).end();
});

export default handler;
