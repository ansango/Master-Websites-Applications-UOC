import { updatePreferencesAccountById } from "@/api/db/account";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Account } from "@/models/user/user";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.patch(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  const { _id, preferences } = req.body as Account;
  try {
    await updatePreferencesAccountById(req.db, _id, preferences);
    return res.json({ account: req.body });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
