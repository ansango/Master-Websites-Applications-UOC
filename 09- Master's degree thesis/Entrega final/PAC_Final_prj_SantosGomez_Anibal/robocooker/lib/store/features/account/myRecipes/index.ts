import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { AppState } from "../../..";
import { initialState } from "./state";
import {
  getMyRecipes,
  removeMyRecipes,
  addMyRecipe,
  updateMyPictureRecipe,
  updateMyInfoRecipe,
  updateMyCategoriesRecipe,
  updateMyIngredientsRecipe,
  updateMyStepsRecipe,
  removeMyRecipe,
} from "./thunks";
export const myRecipesSlice = createSlice({
  name: "myRecipes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMyRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getMyRecipes.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(getMyRecipes.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(removeMyRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(removeMyRecipes.fulfilled, (state) => {
        state.status = "idle";
        state.value = null;
      })
      .addCase(removeMyRecipes.rejected, (state) => {
        state.status = "failed";
      });
    builder
      .addCase(addMyRecipe.pending, (state) => {
        state.status = "loading";
        state.onAddMyRecipe = true;
      })
      .addCase(addMyRecipe.fulfilled, (state) => {
        state.status = "idle";
        state.onAddMyRecipe = false;
        toast.success("Receta agregada");
      })
      .addCase(addMyRecipe.rejected, (state) => {
        state.status = "failed";
        state.onAddMyRecipe = false;
        toast.error("Error al agregar receta");
      });
    builder
      .addCase(updateMyPictureRecipe.pending, (state) => {
        state.status = "loading";
        state.onUpdateRecipeAvatar = true;
      })
      .addCase(updateMyPictureRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value =
          state.value &&
          state.value.map((recipe) => {
            if (recipe._id === action.payload._id) {
              return action.payload;
            }
            return recipe;
          });
        state.onUpdateRecipeAvatar = false;
        toast.success("Imagen actualizada");
      })
      .addCase(updateMyPictureRecipe.rejected, (state) => {
        state.status = "failed";
        state.onUpdateRecipeAvatar = false;
        toast.error("Error al actualizar imagen");
      });
    builder
      .addCase(updateMyInfoRecipe.pending, (state) => {
        state.status = "loading";
        state.onUpdateBasicInfo = true;
      })
      .addCase(updateMyInfoRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value =
          state.value &&
          state.value.map((recipe) => {
            if (recipe._id === action.payload._id) {
              return action.payload;
            }
            return recipe;
          });
        state.onUpdateBasicInfo = false;
        toast.success("Información actualizada");
      })
      .addCase(updateMyInfoRecipe.rejected, (state) => {
        state.status = "failed";
        state.onUpdateBasicInfo = false;
        toast.error("Error al actualizar información");
      });
    builder
      .addCase(updateMyCategoriesRecipe.pending, (state) => {
        state.status = "loading";
        state.onUpdateCategories = true;
      })
      .addCase(updateMyCategoriesRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value =
          state.value &&
          state.value.map((recipe) => {
            if (recipe._id === action.payload._id) {
              return action.payload;
            }
            return recipe;
          });
        state.onUpdateCategories = false;
        toast.success("Categorías actualizadas");
      })
      .addCase(updateMyCategoriesRecipe.rejected, (state) => {
        state.status = "failed";
        state.onUpdateCategories = false;
        toast.error("Error al actualizar categorías");
      });
    builder
      .addCase(updateMyIngredientsRecipe.pending, (state) => {
        state.status = "loading";
        state.onUpdateIngredients = true;
      })
      .addCase(updateMyIngredientsRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value =
          state.value &&
          state.value.map((recipe) => {
            if (recipe._id === action.payload._id) {
              return action.payload;
            }
            return recipe;
          });
        state.onUpdateIngredients = false;
        toast.success("Ingredientes actualizados");
      })

      .addCase(updateMyIngredientsRecipe.rejected, (state) => {
        state.status = "failed";
        state.onUpdateIngredients = false;
        toast.error("Error al actualizar ingredientes");
      });
    builder
      .addCase(updateMyStepsRecipe.pending, (state) => {
        state.status = "loading";
        state.onUpdateSteps = true;
      })
      .addCase(updateMyStepsRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value =
          state.value &&
          state.value.map((recipe) => {
            if (recipe._id === action.payload._id) {
              return action.payload;
            }
            return recipe;
          });
        state.onUpdateSteps = false;
        toast.success("Preparación actualizada");
      })
      .addCase(updateMyStepsRecipe.rejected, (state) => {
        state.status = "failed";
        state.onUpdateSteps = false;
        toast.error("Error al actualizar preparación");
      });
    builder
      .addCase(removeMyRecipe.pending, (state) => {
        state.status = "loading";
        state.onDeleteRecipe = true;
      })
      .addCase(removeMyRecipe.fulfilled, (state, action) => {
        state.status = "idle";
        state.value =
          state.value &&
          state.value.filter((recipe) => {
            return recipe._id !== action.payload._id;
          });
        state.onDeleteRecipe = false;
        toast.success("Receta eliminada");
      })
      .addCase(removeMyRecipe.rejected, (state) => {
        state.status = "failed";
        state.onDeleteRecipe = false;
        toast.error("Error al eliminar receta");
      });
  },
});

export const selectMyRecipes = (state: AppState) => state.myRecipes.value;
export const selectMyRecipesStatus = (state: AppState) =>
  state.myRecipes.status;
export const selectOnAddMyRecipeStatus = (state: AppState) =>
  state.myRecipes.onAddMyRecipe;
export const selectOnUpdateRecipeAvatarStatus = (state: AppState) =>
  state.myRecipes.onUpdateRecipeAvatar;
export const selectOnUpdateBasicInfoStatus = (state: AppState) =>
  state.myRecipes.onUpdateBasicInfo;
export const selectOnUpdateCategoriesStatus = (state: AppState) =>
  state.myRecipes.onUpdateCategories;
export const selectOnUpdateIngredientsStatus = (state: AppState) =>
  state.myRecipes.onUpdateIngredients;
export const selectOnUpdateStepsStatus = (state: AppState) =>
  state.myRecipes.onUpdateSteps;
export const selectOnDeleteRecipeStatus = (state: AppState) =>
  state.myRecipes.onDeleteRecipe;
export default myRecipesSlice.reducer;
