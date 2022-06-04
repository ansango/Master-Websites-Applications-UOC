import {
  findAccountByUserId,
  updateSocialNetworksAccountById,
} from "@/api/db/account";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { updateAccountValidation } from "@/api/schemas/validations";
import { Account } from "@/models/user/user";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.patch(updateAccountValidation(), async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });

  const { _id, social } = req.body as Account;
  try {
    await updateSocialNetworksAccountById(req.db, _id, social);
    return res.json({ account: req.body });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
