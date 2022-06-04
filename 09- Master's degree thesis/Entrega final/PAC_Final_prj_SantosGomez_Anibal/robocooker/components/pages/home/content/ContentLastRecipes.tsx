import {
  selectLastRecipes,
  selectLastRecipesStatus,
} from "@/store/features/recipes/lastRecipes";
import { getLastRecipes } from "@/store/features/recipes/lastRecipes/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import CardRecipe from "../../../common/Cards/Recipe/CardRecipe";

const ContentLastRecipes = () => {
  const dispatch = useAppDispatch();
  const lastRecipes = useAppSelector(selectLastRecipes);
  useEffect(() => {
    dispatch(getLastRecipes(12));
  }, [dispatch]);
  return (
    <AnimatePresence>
      {lastRecipes && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          exit={{ opacity: 0 }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4"
        >
          {lastRecipes.map((recipe) => (
            <CardRecipe key={recipe._id} {...recipe} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContentLastRecipes;
