import { Recipe } from "../recipe/recipe";

type Bookmark = {
  _id: BookmarkId;
  accountId: AccountId;
  recipes: RecipeId[];
  collections: CollectionId[];
};

type CollectionDAO = {
  bookmarkId: BookmarkId;
  name: Name;
  description: Content;
  recipes: RecipeId[];
};

type Collection = {
  _id: CollectionId;
  created: Date;
} & CollectionDAO;

type CollectionDTO = {
  recipes: Recipe[];
} & Collection;

export {
  type Collection,
  type Bookmark,
  type CollectionDAO,
  type CollectionDTO,
};
