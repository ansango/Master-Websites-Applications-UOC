import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Avatar } from "components/common/Avatar";
import GenericHero from "components/common/Hero/GenericHero";
import { Icon } from "components/common/Icons";
import MainLayout from "components/layout/MainLayout";
import Container from "components/pages/trending/Container";
import ContainerContent from "components/pages/trending/ContainerContent";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ContainerHeader from "components/pages/trending/ContainerHeader";
import Subtitle from "components/pages/trending/Subtitle";
import SubParagraph from "components/pages/trending/SubParagraph";
import CardRecipe from "components/common/Cards/Recipe/CardRecipe";
import { useEffect } from "react";
import { getTrendingRecipes } from "@/store/features/trending/thunks";
import { selectTrending } from "@/store/features/trending";

const Trending: NextPage = () => {
  const dispatch = useAppDispatch();
  const recipes = useAppSelector(selectTrending);
  useEffect(() => {
    dispatch(getTrendingRecipes(12));
  }, [dispatch]);
  return (
    <MainLayout>
      <GenericHero
        title="Tendencias"
        description="Las recetas más populares actualizadas en todo momento. Nos morimos de hambre si esperamos a que las veas!"
      />
      <Container>
        <ContainerContent>
          <motion.div className="grid gap-10 mx-auto max-w-lg relative z-10">
            {recipes &&
              recipes.slice(0, 3).map((recipe) => (
                <motion.div key={recipe._id} whileHover={{ scale: 1.008 }}>
                  <div className="card w-full max-w-lg bg-base-100 shadow-xl image-full before:opacity-60 transform hover:shadow-2xl transition duration-250 ease-out hover:ease-in">
                    <figure className="w-full h-72 relative">
                      <Image
                        src={recipe.img}
                        loading="lazy"
                        alt="hero"
                        layout="fill"
                        className="object-center object-cover pointer-events-none"
                      />
                    </figure>
                    <div className="card-body justify-between p-5">
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <div className="flex items-center">
                            {recipe.categories
                              .slice(0, 2)
                              .map((category, index) => (
                                <div
                                  key={index}
                                  className="badge capitalize badge-accent mr-2"
                                >
                                  {category}
                                </div>
                              ))}
                          </div>
                          <Link href={`/recipe/${recipe._id}`} passHref>
                            <button className="btn btn-ghost btn-circle">
                              <Icon
                                icon="EyeIcon"
                                kind="outline"
                                className="w-7 h-7 text-white"
                              />
                            </button>
                          </Link>
                        </div>
                        <h3 className="card-title capitalize text-2xl text-white dark:text-gray-100 line-clamp-1">
                          {recipe.name}
                        </h3>
                        <p className="line-clamp-4 text-white dark:text-gray-100">
                          {recipe.description}
                        </p>
                      </div>
                      <div className="card-actions justify-between items-center">
                        <Link
                          href={`/profile/${recipe.account.username}`}
                          passHref
                        >
                          <motion.div
                            className="flex space-x-2 items-center cursor-pointer"
                            whileTap={{ scale: 0.98 }}
                          >
                            <Avatar
                              size="xs"
                              imgUrl={recipe.account.avatar}
                              username={recipe.account.username}
                            />

                            <span className="text-base font-medium hover:underline">
                              @{recipe.account.username}
                            </span>
                          </motion.div>
                        </Link>

                        <div className="flex items-center space-x-2">
                          <div className="space-x-2 flex items-center">
                            <span className="text-base">
                              {recipe.likes.length}
                            </span>
                            <Icon
                              icon="HeartIcon"
                              kind="solid"
                              className="w-7 h-7 text-secondary"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </ContainerContent>
      </Container>
      <div className="bg-gray-50 dark:bg-gray-800 py-5">
        <Container>
          <ContainerHeader>
            <Subtitle title="¿Te quedaste con hambre?" />
            <SubParagraph content="Puedes echar un vistazo a las las recetas que están escalando posiciones en nuestra lista de tendencias." />
          </ContainerHeader>
          <ContainerContent>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {recipes &&
                recipes
                  .slice(3, 12)
                  .map((recipe) => <CardRecipe key={recipe._id} {...recipe} />)}
            </div>
          </ContainerContent>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Trending;
