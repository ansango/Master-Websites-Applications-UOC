import bcrypt from "bcryptjs";
import { type Db, ObjectId } from "mongodb";
import { normalizeEmail } from "@/utils/validations";
import { Account, Address, User } from "lib/models/user/user";
import { Bookmark } from "@/models/user/bookmark";

const dbProjectionUsers = (prefix = "") => {
  return {
    [`${prefix}password`]: 0,
    [`${prefix}email`]: 0,
    [`${prefix}emailVerified`]: 0,
  };
};

export const findUserWithEmailAndPassword = async (
  db: Db,
  email: Email,
  password: Password
): Promise<User | null> => {
  const user = (await db
    .collection("users")
    .findOne({ email: normalizeEmail(email) })) as User;
  if (!user) {
    return null;
  }
  if (!user.password) {
    return null;
  } else if (user && (await bcrypt.compare(password, user.password))) {
    return { ...user, password: undefined }; // filtered out password
  } else {
    return null;
  }
};

export const findUserForAuth = async (
  db: Db,
  userId: UserId
): Promise<User | null> => {
  const user = (await db
    .collection("users")
    .findOne(
      { _id: new ObjectId(userId) },
      { projection: { password: 0 } }
    )) as User;
  return user || null;
};

export const findUserById = async (
  db: Db,
  userId: UserId
): Promise<User | null> => {
  const user = (await db
    .collection("users")
    .findOne(
      { _id: new ObjectId(userId) },
      { projection: dbProjectionUsers() }
    )) as User;
  return user || null;
};

export const findUserByUsername = async (
  db: Db,
  username: Username
): Promise<User | null> => {
  const user = (await db
    .collection("users")
    .findOne({ username }, { projection: dbProjectionUsers() })) as User;
  return user || null;
};

export const findUserByEmail = async (
  db: Db,
  email: Email
): Promise<User | null> => {
  const user = (await db
    .collection("users")
    .findOne(
      { email: normalizeEmail(email) },
      { projection: dbProjectionUsers() }
    )
    .then((user) => user || null)) as User;
  return user || null;
};

export const findUserByAccountId = async (
  db: Db,
  accountId: AccountId
): Promise<User | null> => {
  const user = (await db
    .collection("users")
    .findOne(
      { accountId: new ObjectId(accountId) },
      { projection: dbProjectionUsers() }
    )
    .then((user) => user || null)) as User;
  return user || null;
};



export const updateUserPasswordByOldPassword = async (
  db: Db,
  userId: UserId,
  oldPassword: Password,
  newPassword: Password
): Promise<boolean | null> => {
  const user = (await db
    .collection("users")
    .findOne(new ObjectId(userId))) as User;
  if (!user || !user.password) {
    return null;
  }
  const matchedPasswords = await bcrypt.compare(oldPassword, user.password);
  if (!matchedPasswords) {
    return null;
  } else {
    const password = await bcrypt.hash(newPassword, 10);
    await db
      .collection("users")
      .updateOne({ _id: new ObjectId(userId) }, { $set: { password } });
    return true;
  }
};

export const updateUserPasswordRecovery = async (
  db: Db,
  userId: UserId,
  newPassword: Password
): Promise<boolean> => {
  const password = await bcrypt.hash(newPassword, 10);
  await db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { password } });
  return true;
};

export const updateUserAccountDataById = async (
  db: Db,
  userId: UserId,
  { email, username }: { email: Email; username: Username }
) => {
  return db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { email, username } });
};

export const updateUserEmailVerifiedById = async (db: Db, userId: UserId) => {
  return db
    .collection("users")
    .updateOne({ _id: new ObjectId(userId) }, { $set: { emailVerified: true } })
    .then((user) => user || null);
};

export const insertUser = async (
  db: Db,
  {
    email,
    originalPassword,
    username,
  }: {
    email: Email;
    originalPassword: Password;
    username: Username;
  }
) => {
  const password = await bcrypt.hash(originalPassword, 10);
  const accountId = new ObjectId();

  const address: Address = {
    address: "",
    city: "",
    country: "",
    zip: "",
  };

  const bookmark: Bookmark = {
    _id: new ObjectId(),
    accountId,
    recipes: [],
    collections: [],
  };
  await db.collection("bookmarks").insertOne({ ...bookmark });
  const account: Account = {
    _id: accountId,
    about: "",
    avatar: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthday: null,
    address,
    recipes: [],
    bookmark: bookmark._id,
    favorites: [],
    chat: [],
    followers: [],
    following: [],
    preferences: [],
    social: {
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
    },
  };
  await db.collection("accounts").insertOne({ ...account });

  const user: User = {
    _id: new ObjectId(),
    accountId,
    username,
    email,
    emailVerified: false,
    password,

    created: new Date(),
  };

  await db.collection("users").insertOne({ ...user });

  return { ...user };
};

export const deleteUserById = async (
  db: Db,
  userId: UserId,
  currentPassword: Password
) => {
  const user = (await db
    .collection("users")
    .findOne(new ObjectId(userId))) as User;
  if (!user || !user.password) {
    return null;
  }

  const matchedPasswords = await bcrypt.compare(currentPassword, user.password);
  if (!matchedPasswords) {
    return null;
  }
  try {
    await db.collection("users").deleteOne({ _id: new ObjectId(userId) });
    await db
      .collection("accounts")
      .deleteOne({ _id: new ObjectId(user.accountId) });
    await db
      .collection("bookmarks")
      .deleteOne({ accountId: new ObjectId(user.accountId) });
    return true;
  } catch (error) {
    throw error;
  }
};
