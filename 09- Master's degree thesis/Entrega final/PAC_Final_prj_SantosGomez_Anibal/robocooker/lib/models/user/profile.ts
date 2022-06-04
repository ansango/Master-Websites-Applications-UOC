import { RecipeDTO } from "../recipe/recipe";
import { Follower, SocialNetwork } from "./user";

type Profile = {
  username: Username;
  accountId: AccountId;
  about: Content;
  avatar: Url;
  firstName: FirstName;
  lastName: LastName;
  followers: Follower[];
  following: Follower[];
  recipes: RecipeDTO[];
  social: SocialNetwork;
};
export { type Profile };
