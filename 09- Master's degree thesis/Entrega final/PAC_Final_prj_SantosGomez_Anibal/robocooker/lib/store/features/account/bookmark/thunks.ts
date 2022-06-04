import { Bookmark, Collection, CollectionDAO } from "@/models/user/bookmark";
import {
  onGetBookmarkService,
  onSaveRecipeBookmarkService,
  onAddCollectionService,
  onGetBookmarkRecipesService,
  onGetBookmarkCollectionsService,
} from "@/services/bookmark";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBookmark = createAsyncThunk(
  "bookmark/getBookmark",
  async () => {
    const response = onGetBookmarkService();
    return response;
  }
);

export const saveRecipeBookmark = createAsyncThunk(
  "bookmark/saveBookmark",
  async (bookmark: Bookmark) => {
    const response = onSaveRecipeBookmarkService(bookmark);
    return response;
  }
);

export const getBookmarkRecipes = createAsyncThunk(
  "bookmark/getBookmarkRecipes",
  async () => {
    const response = onGetBookmarkRecipesService();
    return response;
  }
);

export const getBookmarkCollections = createAsyncThunk(
  "bookmark/getBookmarkCollections",
  async () => {
    const response = onGetBookmarkCollectionsService();
    return response;
  }
);

export const addCollection = createAsyncThunk(
  "bookmark/addCollection",
  async ({ collection }: { collection: CollectionDAO }) => {
    const response = onAddCollectionService({ collection });
    return response;
  }
);
