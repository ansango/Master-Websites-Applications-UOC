import { selectRecipe } from "@/store/features/recipes/recipe";
import { getRecipe } from "@/store/features/recipes/recipe/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import MainLayout from "components/layout/MainLayout";
import Hero from "components/pages/recipe/Hero";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Divider from "components/pages/recipe/Divider";
import Container from "components/pages/recipe/Container";
import ContainerSection from "components/pages/recipe/ContainerSection";
import SocialSection from "components/pages/recipe/SocialSection";
import CommentsSection from "components/pages/recipe/CommentsSection";
import CommentsUserSection from "components/pages/recipe/CommentsUserSection";
import StepsBlock from "components/pages/recipe/StepsBlock";
import IngredientsBlock from "components/pages/recipe/IngredientsBlock";
import CategoriesDescriptionBlock from "components/pages/recipe/CategoriesDescriptionBlock";
import AuthorOptionsBlock from "components/pages/recipe/AuthorOptionsBlock";
import { getComments } from "@/store/features/comments/thunk";
import { getBookmark } from "@/store/features/account/bookmark/thunks";
import { AnimatePresence, motion } from "framer-motion";

const Recipe: NextPage = () => {
  const { query } = useRouter();
  const { id } = query;
  const dispatch = useAppDispatch();
  const recipe = useAppSelector(selectRecipe);

  useEffect(() => {
    if (!Array.isArray(id) && id) {
      dispatch(getRecipe(id));
      dispatch(getComments(id));
      dispatch(getBookmark());
    }
  }, [id, dispatch]);
  return (
    <MainLayout>
      <AnimatePresence>
        {recipe && id && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            exit={{ opacity: 0 }}
          >
            <Container>
              <ContainerSection>
                {id && <AuthorOptionsBlock id={id} />}
                {recipe && <Hero img={recipe.img} name={recipe.name} />}
                <div className="grid gap-5 grid-cols-12 pt-2">
                  {recipe && <CategoriesDescriptionBlock {...recipe} />}
                  {recipe && (
                    <IngredientsBlock ingredients={recipe.ingredients} />
                  )}
                </div>
                <Divider />
                {recipe && <StepsBlock steps={recipe.steps} />}
              </ContainerSection>
              <SocialSection />
              <CommentsSection />
              <CommentsUserSection />
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </MainLayout>
  );
};

export default Recipe;
