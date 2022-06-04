import { Collection } from "@/models/user/bookmark";
import {
  onGetCollectionService,
  onDeleteCollectionService,
  onSaveCollectionService,
} from "@/services/bookmark";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCollection = createAsyncThunk(
  "collection/getCollection",
  async (id: CollectionId) => {
    const response = await onGetCollectionService(id);
    return response;
  }
);

export const deleteCollection = createAsyncThunk(
  "collection/deleteCollection",
  async (id: CollectionId) => {
    const response = await onDeleteCollectionService(id);
    return response;
  }
);

export const editCollection = createAsyncThunk(
  "collection/editCollection",
  async (collection: Collection) => {
    const response = await onSaveCollectionService(collection);
    return response;
  }
);
