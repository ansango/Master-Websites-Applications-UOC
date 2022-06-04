import { Chat } from "lib/models/chat/chat";

type Follower = {
  accountId: UserId;
  username: Username;
};

type UserTrending = {
  accountId: UserId;
  username: Username;
  avatar: Url;
  firstName: Name;
  lastName: Name;
  about: Content;
  recipes: number;
  followers: number;
};

type User = {
  _id: UserId;
  email: Email;
  emailVerified: boolean;
  username: Username;
  password: Password | undefined;
  accountId: AccountId;
  created: Date;
};

type Account = {
  _id: AccountId;
  about: Content;
  avatar: Url;
  firstName: FirstName;
  lastName: LastName;
  phone: Phone;
  birthday: Birthday | null;
  address: Address;
  recipes: RecipeId[];
  bookmark: BookmarkId;
  favorites: RecipeId[];
  chat: Chat[];
  followers: Follower[];
  following: Follower[];
  preferences: string[] | CategoryName[] | BlenderName[];
  social: SocialNetwork;
};

type SocialNetwork = {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
};

type Address = {
  address: string;
  city: City;
  country: Country;
  zip: Zip;
};

export {
  type User,
  type Account,
  type Address,
  type Follower,
  type SocialNetwork,
  type UserTrending,
};
