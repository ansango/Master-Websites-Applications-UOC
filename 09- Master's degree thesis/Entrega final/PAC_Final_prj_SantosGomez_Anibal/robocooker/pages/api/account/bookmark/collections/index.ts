import { findAccountByUserId } from "@/api/db/account";
import { addCollectionBookmark, findBookmarkById } from "@/api/db/bookmark";
import { findCollectionsByIds, insertCollection } from "@/api/db/collection";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Bookmark, CollectionDAO } from "@/models/user/bookmark";
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
  const { bookmark: bookmarkId } = account;
  const { collections: collectionsIds } = (await findBookmarkById(
    req.db,
    bookmarkId
  )) as Bookmark;
  if (!collectionsIds || collectionsIds.length === 0)
    return res.status(404).json({ error: "Collections not found" });

  const collections = await findCollectionsByIds(req.db, collectionsIds);
  if (!collections || collections.length === 0)
    return res.status(404).json({ error: "Collections not found" });
  return res.json({ collections });
});

handler.post(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });

  if (!req.body.collection)
    return res.status(404).json({ error: "Collection not found" });

  const collectionDAO = req.body.collection as CollectionDAO;
  try {
    const collection = await insertCollection(req.db, collectionDAO);
    const addedBookmark = await addCollectionBookmark(req.db, collection);
    if (!collection || !addedBookmark)
      return res.status(500).json({ error: "Collection not added" });

    return res.json({ collection });
  } catch (error) {
    return res.status(500).json({ error });
  }
});

export default handler;
