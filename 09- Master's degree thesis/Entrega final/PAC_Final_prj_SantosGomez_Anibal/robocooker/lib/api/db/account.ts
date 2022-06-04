import { Account, Follower, UserTrending } from "lib/models/user/user";
import { type Db, ObjectId } from "mongodb";

export const findAccountByUserId = (db: Db, accountId: AccountId) => {
  return db
    .collection("accounts")
    .findOne({ _id: new ObjectId(accountId) })
    .then((account) => account || null);
};

export const findAccountById = async (db: Db, accountId: AccountId) => {
  const account = (await db
    .collection("accounts")
    .findOne({ _id: new ObjectId(accountId) })
    .then((account) => account || null)) as Account;
  return account;
};

export const findTrendingAccounts = async (db: Db, limit: number) => {
  try {
    const data = (await db
      .collection("accounts")
      .aggregate([
        { $addFields: { _id: { $toString: "$_id" } } },
        {
          $lookup: {
            from: "recipes",
            localField: "_id",
            foreignField: "accountId",
            as: "recipes",
          },
        },
        {
          $addFields: {
            recipes: { $size: "$recipes" },
          },
        },
        { $addFields: { _id: { $toObjectId: "$_id" } } },
        {
          $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "accountId",
            as: "users",
          },
        },
        {
          $addFields: {
            username: { $arrayElemAt: ["$users.username", 0] },
            followers: { $size: "$followers" },
          },
        },
        {
          $project: {
            accountId: 1,
            username: 1,
            avatar: 1,
            firstName: 1,
            lastName: 1,
            recipes: 1,
            followers: 1,
            about: 1,
          },
        },
        { $sort: { recipes: -1 } },
      ])
      .toArray()) as UserTrending[];
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateAccountDataById = async (
  db: Db,
  accountId: AccountId,
  { about, address, birthday, firstName, lastName, phone }: Account
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      { $set: { about, address, birthday, firstName, lastName, phone } }
    )
    .then((account) => account || null);
};

export const updateAvatarAccountById = async (
  db: Db,
  accountId: AccountId,
  avatar: Url
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate({ _id: new ObjectId(accountId) }, { $set: { avatar } })
    .then((account) => account || null);
};

export const updateAccountRecipesById = async (
  db: Db,
  accountId: AccountId,
  recipe: RecipeId
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      { $push: { recipes: recipe.toString() } }
    )
    .then((account) => account || null);
};

export const updatePreferencesAccountById = async (
  db: Db,
  accountId: AccountId,
  preferences: string[]
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      { $set: { preferences } }
    )
    .then((account) => account || null);
};

export const updateSocialNetworksAccountById = async (
  db: Db,
  accountId: AccountId,
  socialNetworks: any
) => {
  return db
    .collection("accounts")
    .findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      { $set: { social: socialNetworks } }
    )
    .then((account) => account || null);
};

export const updateAccountLikesById = async (
  db: Db,
  accountId: AccountId,
  recipeId: RecipeId
) => {
  try {
    const accountLike = await db.collection("accounts").findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      {
        $push: { favorites: recipeId.toString() },
      }
    );
    if (accountLike.value) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

export const updateAccountDislikesById = async (
  db: Db,
  accountId: AccountId,
  recipeId: RecipeId
) => {
  try {
    const accountDislike = await db.collection("accounts").findOneAndUpdate(
      { _id: new ObjectId(accountId) },
      {
        $pull: { favorites: recipeId.toString() },
      }
    );
    if (accountDislike.value) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

export const findIsFollowedById = async (
  db: Db,
  accountId: AccountId,
  accountFollowedId: AccountId
): Promise<boolean> => {
  try {
    const account = await db.collection("accounts").findOne({
      _id: new ObjectId(accountId),
      following: { $elemMatch: { accountId: accountFollowedId.toString() } },
    });
    if (account) {
      return true;
    }
    return false;
  } catch (error) {
    throw error;
  }
};

export const updateFollowingsById = async (
  db: Db,
  accountId: AccountId,
  toFollow: Follower
) => {
  return await db
    .collection("accounts")
    .updateOne(
      { _id: new ObjectId(accountId) },
      { $push: { following: toFollow } }
    );
};

export const updateFollowersById = async (
  db: Db,
  accountId: AccountId,
  follower: Follower
) => {
  return await db
    .collection("accounts")
    .updateOne(
      { _id: new ObjectId(accountId) },
      { $push: { followers: follower } }
    );
};

export const updateUnFollowingsById = async (
  db: Db,
  accountId: AccountId,
  toUnFollow: Follower
) => {
  return await db
    .collection("accounts")
    .updateOne(
      { _id: new ObjectId(accountId) },
      { $pull: { following: toUnFollow } }
    );
};

export const updateUnFollowersById = async (
  db: Db,
  accountId: AccountId,
  follower: Follower
) => {
  return await db
    .collection("accounts")
    .updateOne(
      { _id: new ObjectId(accountId) },
      { $pull: { followers: follower } }
    );
};
