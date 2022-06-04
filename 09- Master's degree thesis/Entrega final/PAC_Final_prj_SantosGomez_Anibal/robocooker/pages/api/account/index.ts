import {
  findAccountByUserId,
  updateAccountDataById,
} from "@/api/db/account";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { updateAccountValidation } from "@/api/schemas/validations";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.json({ account: null });
  const account = await findAccountByUserId(req.db, req.user.accountId);
  return res.json({ account });
});

handler.patch(updateAccountValidation(), async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  const account = await findAccountByUserId(req.db, req.user.accountId);
  if (!account) return res.status(404).json({ error: "Account not found" });
  try {
    await updateAccountDataById(req.db, req.user.accountId, req.body);
  } catch (error) {
    return res.status(500).json({ error });
  }
  return res.json({ account: req.body });
});

export default handler;
