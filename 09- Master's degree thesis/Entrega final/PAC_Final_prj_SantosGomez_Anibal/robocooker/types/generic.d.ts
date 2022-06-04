// Ids

type UserId = ObjectId | string;
type AccountId = ObjectId | string;
type ChatId = ObjectId | string;
type RecipeId = ObjectId | string;
type BlenderId = ObjectId | string;
type CategoryId = ObjectId | string;
type CommentId = ObjectId | string;
type CollectionId = ObjectId | string;
type MessageId = ObjectId | string;
type TokenId = ObjectId | string;
type BookmarkId = ObjectId | string;
// Generics

type Name = string;
type Content = string;

// User & Account

type Username = string;
type FirstName = string;
type LastName = string;
type Email = string;
type Url = string;
type Password = string;
type Phone = string;
type Birthday = string;
type City = string;
type Zip = string;
type Country = string;

type CompanyName = Name;
// Recipe

type Servings = number;
type Duration = number;
type Position = number;

// Category

type CategoryName = Name;

// Ingredient

type Unit = number;
type Measure = "gr" | "ml" | "portion";

// Blender

type BlenderName = string;
