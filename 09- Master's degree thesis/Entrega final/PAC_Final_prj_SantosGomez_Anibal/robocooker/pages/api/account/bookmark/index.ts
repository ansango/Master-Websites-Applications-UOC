import { findAccountByUserId } from "@/api/db/account";
import { findBookmarkById} from "@/api/db/bookmark";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Account } from "@/models/user/user";
import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  const account = (await findAccountByUserId(
    req.db,
    req.user.accountId
  )) as Account;
  if (!account) return res.status(404).json({ error: "Account not found" });
  try {
    const { bookmark: bookmarkId } = account;
    const bookmark = await findBookmarkById(req.db, bookmarkId);
    return res.json({ bookmark: bookmark });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
