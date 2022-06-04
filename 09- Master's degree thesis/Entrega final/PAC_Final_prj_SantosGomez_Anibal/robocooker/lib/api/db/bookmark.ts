import { Recipe } from "@/models/recipe/recipe";
import { Bookmark, Collection, CollectionDAO } from "@/models/user/bookmark";
import { Db, ObjectId } from "mongodb";

export const findBookmarkById = async (
  db: Db,
  bookmarkId: BookmarkId
): Promise<Bookmark> => {
  const bookmark = (await db
    .collection("bookmarks")
    .findOne({ _id: new ObjectId(bookmarkId) })) as Bookmark;
  return bookmark;
};

export const findBookmarkedRecipesByIds = async (
  db: Db,
  recipesIds: RecipeId[]
): Promise<Recipe[]> => {
  const recipes = (await db
    .collection("recipes")
    .find({ _id: { $in: recipesIds.map((id) => new ObjectId(id)) } })
    .toArray()) as Recipe[];
  return recipes;
};

export const updateRecipesBookmark = async (
  db: Db,
  bookmarkId: BookmarkId,
  recipes: RecipeId[]
): Promise<Bookmark> => {
  const bookmark = await db
    .collection("bookmarks")
    .findOneAndUpdate({ _id: new ObjectId(bookmarkId) }, { $set: { recipes } });
  return bookmark.value as Bookmark;
};

export const addCollectionBookmark = async (
  db: Db,
  collection: Collection
): Promise<boolean> => {
  try {
    await db
      .collection("bookmarks")
      .findOneAndUpdate(
        { _id: new ObjectId(collection.bookmarkId) },
        { $push: { collections: collection._id.toString() } }
      );
    return true;
  } catch (error) {
    return false;
  }
};
