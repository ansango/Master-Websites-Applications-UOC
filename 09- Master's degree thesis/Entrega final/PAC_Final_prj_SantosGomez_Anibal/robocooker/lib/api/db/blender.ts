import { Recipe, RecipeDTO } from "@/models/recipe/recipe";
import { Account, User } from "@/models/user/user";
import { Db, ObjectId } from "mongodb";

export const findAllBlenders = (db: Db) => {
  return db
    .collection("blenders")
    .find()
    .toArray()
    .then((blenders) => blenders || []);
};

export const findAllRecipesByBlender = async (
  db: Db,
  blender: BlenderName,
  limit: number
): Promise<RecipeDTO[] | void> => {
  try {
    const data = (await db
      .collection("recipes")
      .find({
        blenders: blender,
      })
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

export const findPopularRecipesByBlender = async (
  db: Db,
  blender: BlenderName,
  limit: number
): Promise<RecipeDTO[] | void> => {
  try {
    const data = (await db
      .collection("recipes")
      .aggregate([
        {
          $match: {
            blenders: {
              $elemMatch: {
                $eq: blender,
              },
            },
          },
        },
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
      recipes.sort((a, b) => b.likes.length - a.likes.length)
    );
  } catch (error) {
    throw error;
  }
};

export const findMostCommentedRecipesByBlender = async (
  db: Db,
  blender: BlenderName,
  limit: number
): Promise<RecipeDTO[] | void> => {
  try {
    const data = (await db
      .collection("recipes")
      .aggregate([
        {
          $match: {
            blenders: {
              $elemMatch: {
                $eq: blender,
              },
            },
          },
        },
        { $addFields: { _id: { $toString: "$_id" } } },
        {
          $lookup: {
            from: "comments",
            localField: "_id",
            foreignField: "recipeId",
            as: "comments",
          },
        },
        {
          $project: {
            _id: 1,
            name: 1,
            description: 1,
            img: 1,
            categories: 1,
            comments: 1,
            servings: 1,
            duration: 1,
            blenders: 1,
            ingredients: 1,
            steps: 1,
            created: 1,
            accountId: 1,
            likes: 1,
            likeCount: { $size: "$likes" },
            commentCount: { $size: "$comments" },
          },
        },
        { $sort: { commentCount: -1 } },
        { $limit: limit },
      ])
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
      recipes.sort((a, b) => {
        return a.comments && b.comments
          ? b.comments?.length - a.comments?.length
          : 0;
      })
    );
  } catch (error) {
    throw error;
  }
};
