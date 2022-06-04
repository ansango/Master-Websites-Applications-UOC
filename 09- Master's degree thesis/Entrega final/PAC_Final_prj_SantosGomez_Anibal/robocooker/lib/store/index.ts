import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import userReducer from "./features/user";
import accountReducer from "./features/account/account";
import lastRecipesReducer from "./features/recipes/lastRecipes";
import myRecipesReducer from "./features/account/myRecipes";
import recipeReducer from "./features/recipes/recipe";
import commentsReducer from "./features/comments";
import profileReducer from "./features/profile";
import favoritesReducer from "./features/account/favorites";
import bookmarkReducer from "./features/account/bookmark";
import collectionReducer from "./features/account/collection";
import searchReducer from "./features/search";
import categoryReducer from "./features/category";
import trendingReducer from "./features/trending";
import robousersReducer from "./features/robousers";

export function makeStore() {
  return configureStore({
    reducer: {
      user: userReducer,
      account: accountReducer,
      favorites: favoritesReducer,
      bookmark: bookmarkReducer,
      collection: collectionReducer,
      myRecipes: myRecipesReducer,
      lastRecipes: lastRecipesReducer,
      recipe: recipeReducer,
      comments: commentsReducer,
      profile: profileReducer,
      category: categoryReducer,
      search: searchReducer,
      trending: trendingReducer,
      robousers: robousersReducer,
    },
  });
}

const store = makeStore();
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
