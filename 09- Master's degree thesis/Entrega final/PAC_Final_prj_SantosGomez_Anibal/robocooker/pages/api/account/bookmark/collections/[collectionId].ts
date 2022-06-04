import {
  deleteCollectionBookmark,
  deleteCollectionById,
  findCollectedRecipesByIds,
  findCollectionById,
  updateCollection,
} from "@/api/db/collection";
import { auth, database } from "@/api/middlewares";
import { options } from "@/api/nc";
import { Collection } from "@/models/user/bookmark";

import nc from "next-connect";

const handler = nc(options);
handler.use(database, ...auth);

handler.get(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.query.collectionId)
    return res.status(400).json({ error: "CollectionId is required" });
  const collection = (await findCollectionById(
    req.db,
    req.query.collectionId
  )) as Collection;

  if (!collection)
    return res.status(404).json({ error: "Collection not found" });
  const recipes = await findCollectedRecipesByIds(req.db, collection.recipes);
  if (!recipes) return res.status(404).json({ error: "Recipes not found" });

  return res.json({ collection: { ...collection, recipes: [...recipes] } });
});

handler.patch(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.body.collection)
    return res.status(400).json({ error: "Collection is required" });
  if (!req.query.collectionId)
    return res.status(400).json({ error: "CollectionId is required" });
  const collection = req.body.collection as Collection;
  try {
    const collectionUpdated = await updateCollection(req.db, collection);
    return res.json({ collection: collectionUpdated });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});

handler.delete(async (req, res) => {
  if (!req.user) return res.status(401).json({ error: "Unauthorized" });
  if (!req.query.collectionId)
    return res.status(400).json({ error: "CollectionId is required" });
  const { bookmarkId, _id: collectionId } = (await findCollectionById(
    req.db,
    req.query.collectionId
  )) as Collection;
  if (!bookmarkId)
    return res.status(404).json({ error: "Collection not found" });
  const deletedCollection = await deleteCollectionById(req.db, collectionId);
  if (!deletedCollection)
    return res.status(404).json({ error: "Collection not deleted" });
  const deleteCollectionInBookmark = await deleteCollectionBookmark(
    req.db,
    collectionId,
    bookmarkId
  );
  if (!deleteCollectionInBookmark)
    return res
      .status(404)
      .json({ error: "Collection not deleted in bookmark" });

  return res.status(204).end();
});

export default handler;
