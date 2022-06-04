import { Db, ObjectId } from "mongodb";

import { Recipe, RecipeDAO, RecipeDTO } from "@/models/recipe/recipe";
import { updateAccountRecipesById } from "./account";
import { Account, User } from "@/models/user/user";

export const insertRecipe = async (
  db: Db,
  accountId: AccountId,
  content: RecipeDAO
): Promise<RecipeDAO> => {
  const recipe: Recipe = {
    ...content,
    likes: [],
    created: new Date(),
    _id: new ObjectId(),
    img: "",
  };

  try {
    await db.collection("recipes").insertOne(recipe);
    await updateAccountRecipesById(db, accountId, recipe._id);
    return recipe;
  } catch (error) {
    throw error;
  }
};

export const findRecipeById = async (db: Db, id: RecipeId): Promise<Recipe> => {
  try {
    const response = (await db
      .collection("recipes")
      .findOne({ _id: new ObjectId(id) })) as Recipe;
    return response;
  } catch (error) {
    throw error;
  }
};

export const findAllRecipesPopulated = async (
  db: Db
): Promise<RecipeDTO[] | void> => {
  try {
    const data = (await db.collection("recipes").find().toArray()) as Recipe[];
    const queries = data.map(async (recipe) => {
      const accountId = recipe.accountId;
      const { avatar, firstName, lastName } = (await db
        .collection("accounts")
        .findOne({ _id: new ObjectId(accountId) })) as Account;

      const { username } = (await db
        .collection("users")
        .findOne({ accountId: new ObjectId(accountId) })) as User;
      return { ...recipe, account: { avatar, firstName, lastName, username } };
    });
    return Promise.all(queries);
  } catch (error) {
    throw error;
  }
};

export const findLastRecipesPopulated = async (
  db: Db,
  limit: number
): Promise<RecipeDTO[] | void> => {
  try {
    const data = (await db
      .collection("recipes")
      .find()
      .sort({ created: -1 })
      .limit(limit)
      .toArray()) as Recipe[];

    const queries = data.map(async (recipe) => {
      const accountId = recipe.accountId;
      const { avatar, firstName, lastName } = (await db
        .collection("accounts")
        .findOne({ _id: new ObjectId(accountId) })) as Account;

      const { username } = (await db
        .collection("users")
        .findOne({ accountId: new ObjectId(accountId) })) as User;
      return { ...recipe, account: { avatar, firstName, lastName, username } };
    });

    return Promise.all(queries).then((recipes) =>
      recipes.sort((a, b) => b.created.getTime() - a.created.getTime())
    );
  } catch (error) {
    throw error;
  }
};

export const findQueryRecipesPopulated = async (db: Db, query: any) => {
  const data = (await db
    .collection("recipes")
    .find(query)
    .sort({ created: -1 })
    .toArray()) as Recipe[];
  const queries = data.map(async (recipe) => {
    const accountId = recipe.accountId;
    const { avatar, firstName, lastName } = (await db
      .collection("accounts")
      .findOne({ _id: new ObjectId(accountId) })) as Account;

    const { username } = (await db
      .collection("users")
      .findOne({ accountId: new ObjectId(accountId) })) as User;
    return { ...recipe, account: { avatar, firstName, lastName, username } };
  });
  return await Promise.all(queries).then((recipes) =>
    recipes.sort((a, b) => b.created.getTime() - a.created.getTime())
  );
};

export const findRecipesByAccountId = async (db: Db, accountId: AccountId) => {
  try {
    const data = await db
      .collection("recipes")
      .find({
        accountId: accountId.toString(),
      })
      .toArray();
    return data;
  } catch (error) {
    throw error;
  }
};

export const findRecipeLikedByAccountId = async (
  db: Db,
  recipeId: RecipeId,
  accountId: AccountId
): Promise<Recipe | null> => {
  const isLiked = (await db.collection("recipes").findOne({
    _id: new ObjectId(recipeId),
    likes: accountId.toString(),
  })) as Recipe;

  if (isLiked) {
    return isLiked;
  }
  return null;
};

export const findMostLikedRecipes = async (
  db: Db,
  limit: number
): Promise<RecipeDTO[] | void> => {
  try {
    const data = (await db
      .collection("recipes")
      .aggregate([
        {
          $project: {
            _id: 1,
            name: 1,
            description: 1,
            img: 1,
            categories: 1,
            servings: 1,
            duration: 1,
            blenders: 1,
            ingredients: 1,
            steps: 1,
            created: 1,
            accountId: 1,
            likes: 1,
            likeCount: { $size: "$likes" },
          },
        },
        { $sort: { likeCount: -1 } },
        { $limit: limit },
      ])
      .toArray()) as unknown as Recipe[];

    const queries = data.map(async (recipe) => {
      const accountId = recipe.accountId;
      const { avatar, firstName, lastName } = (await db
        .collection("accounts")
        .findOne({ _id: new ObjectId(accountId) })) as Account;

      const { username } = (await db
        .collection("users")
        .findOne({ accountId: new ObjectId(accountId) })) as User;
      return { ...recipe, account: { avatar, firstName, lastName, username } };
    });

    return Promise.all(queries).then((recipes) =>
      recipes.sort((a, b) => b.likes.length - a.likes.length)
    );
  } catch (error) {
    throw error;
  }
};

export const findRecipeByIdPopulated = async (
  db: Db,
  id: RecipeId
): Promise<RecipeDTO | void> => {
  try {
    const recipe = (await db
      .collection("recipes")
      .findOne({ _id: new ObjectId(id) })) as Recipe;

    const { avatar, firstName, lastName } = (await db
      .collection("accounts")
      .findOne({ _id: new ObjectId(recipe.accountId) })) as Account;

    const { username } = (await db
      .collection("users")
      .findOne({ accountId: new ObjectId(recipe.accountId) })) as User;

    return { ...recipe, account: { avatar, firstName, lastName, username } };
  } catch (error) {
    throw error;
  }
};

export const findRecipesByIds = async (
  db: Db,
  recipeIds: RecipeId[]
): Promise<Recipe[] | void> => {
  try {
    const data = (await db
      .collection("recipes")
      .find({
        _id: { $in: recipeIds.map((id) => new ObjectId(id)) },
      })
      .toArray()) as Recipe[];

    return data as Recipe[];
  } catch (error) {
    throw error;
  }
};

export const updateImageRecipeById = async (
  db: Db,
  id: string,
  img: string
): Promise<boolean> => {
  try {
    await db
      .collection("recipes")
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { img } });
    return true;
  } catch (error) {
    throw error;
  }
};

export const updateRecipeInfoById = async (
  db: Db,
  id: RecipeId,
  content: {
    name: RecipeDAO["name"];
    description: RecipeDAO["description"];
    servings: RecipeDAO["servings"];
    duration: RecipeDAO["duration"];
  }
): Promise<boolean> => {
  try {
    await db
      .collection("recipes")
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { ...content } });
    return true;
  } catch (error) {
    throw error;
  }
};

export const updateRecipeCategoriesById = async (
  db: Db,
  id: RecipeId,
  content: {
    categories: RecipeDAO["categories"];
    blenders: RecipeDAO["blenders"];
  }
): Promise<boolean> => {
  try {
    await db
      .collection("recipes")
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { ...content } });
    return true;
  } catch (error) {
    throw error;
  }
};

export const updateRecipeIngredientsById = async (
  db: Db,
  id: RecipeId,
  content: {
    ingredients: RecipeDAO["ingredients"];
  }
): Promise<boolean> => {
  try {
    await db
      .collection("recipes")
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { ...content } });
    return true;
  } catch (error) {
    throw error;
  }
};

export const updateRecipeStepsById = async (
  db: Db,
  id: RecipeId,
  content: {
    steps: RecipeDAO["steps"];
  }
): Promise<boolean> => {
  try {
    await db
      .collection("recipes")
      .findOneAndUpdate({ _id: new ObjectId(id) }, { $set: { ...content } });
    return true;
  } catch (error) {
    throw error;
  }
};

export const updateRecipeLikesById = async (
  db: Db,
  recipeId: RecipeId,
  accountId: AccountId
): Promise<boolean> => {
  try {
    await db.collection("recipes").findOneAndUpdate(
      { _id: new ObjectId(recipeId) },
      {
        $push: { likes: accountId.toString() },
      }
    );
    return true;
  } catch (error) {
    throw error;
  }
};

export const updateRecipeDislikesById = async (
  db: Db,
  recipeId: RecipeId,
  accountId: AccountId
): Promise<boolean> => {
  try {
    await db.collection("recipes").findOneAndUpdate(
      { _id: new ObjectId(recipeId) },
      {
        $pull: { likes: accountId.toString() },
      }
    );
    return true;
  } catch (error) {
    throw error;
  }
};

export const deleteRecipeById = async (
  db: Db,
  recipeId: RecipeId,
  accountId: AccountId
): Promise<boolean> => {
  try {
    await db
      .collection("recipes")
      .findOneAndDelete({ _id: new ObjectId(recipeId) });
    await db
      .collection("accounts")
      .findOneAndUpdate(
        { _id: new ObjectId(accountId) },
        { $pull: { recipes: recipeId } }
      );
    return true;
  } catch (error) {
    throw error;
  }
};
