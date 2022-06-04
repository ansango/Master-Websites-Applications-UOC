import {
  Bookmark,
  Collection,
  CollectionDAO,
  CollectionDTO,
} from "@/models/user/bookmark";
import fetcher from "@/utils/fetcher";

export const onGetBookmarkService = async () => {
  const response = await fetcher("/api/account/bookmark/");
  return response.bookmark;
};

export const onGetBookmarkRecipesService = async () => {
  const response = await fetcher("/api/account/bookmark/recipes");
  return response.recipes;
};

export const onGetBookmarkCollectionsService = async (): Promise<
  Collection[]
> => {
  const response = await fetcher("/api/account/bookmark/collections");
  return response.collections;
};

export const onGetCollectionService = async (
  collectionId: CollectionId
): Promise<CollectionDTO> => {
  const response = await fetcher(
    `/api/account/bookmark/collections/${collectionId}`
  );
  return response.collection;
};

export const onSaveRecipeBookmarkService = async (
  bookmark: Bookmark
): Promise<Bookmark> => {
  try {
    const response = await fetcher("/api/account/bookmark/recipes", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        bookmark,
      }),
    });
    return response.bookmark;
  } catch (error) {
    throw error;
  }
};

export const onAddCollectionService = async ({
  collection,
}: {
  collection: CollectionDAO;
}): Promise<Collection> => {
  try {
    const response = await fetcher("/api/account/bookmark/collections", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection,
      }),
    });
    return response.collection;
  } catch (error) {
    throw error;
  }
};

export const onDeleteCollectionService = async (
  collectionId: CollectionId
): Promise<void> => {
  try {
    await fetcher(`/api/account/bookmark/collections/${collectionId}`, {
      method: "DELETE",
    });
  } catch (error) {
    throw error;
  }
};

export const onSaveCollectionService = async (
  collection: Collection
): Promise<CollectionDTO> => {
  try {
    const response = await fetcher(
      `/api/account/bookmark/collections/${collection._id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collection,
        }),
      }
    );
    return response.collection;
  } catch (error) {
    throw error;
  }
};
