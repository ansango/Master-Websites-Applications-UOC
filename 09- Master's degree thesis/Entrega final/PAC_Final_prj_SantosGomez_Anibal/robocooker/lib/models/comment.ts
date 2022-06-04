type CommentDAO = {
  author: Username;
  recipeId: RecipeId;
  content: Content;
  created: Date;
};

type Comment = {
  _id: CommentId;
  author: Username;
  recipeId: RecipeId;
  content: Content;
  created: Date;
};

export { type Comment, type CommentDAO };
