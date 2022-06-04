import { Form, Input } from "components/common/Forms";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useCallback, useEffect } from "react";
import MainLayout from "components/layout/MainLayout";
import GenericHero from "components/common/Hero/GenericHero";
import Container from "components/pages/recipes/Container";
import ContainerContent from "components/pages/recipes/ContainerContent";
import ContainerHeader from "components/pages/recipes/ContainerHeader";
import Subtitle from "components/pages/recipes/Subtitle";
import CardRecipe from "components/common/Cards/Recipe/CardRecipe";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { selectSearchResults, selectSearchStatus, setQuery } from "@/store/features/search";
import { search } from "@/store/features/search/thunks";
import { AnimatePresence, motion } from "framer-motion";

const Recipes: NextPage = () => {
  const { query } = useRouter();
  const { params } = query;
  const dispatch = useAppDispatch();
  const results = useAppSelector(selectSearchResults);
const isLoading = useAppSelector(selectSearchStatus) === "loading";
  useEffect(() => {
    if (params && !Array.isArray(params)) {
      dispatch(search({ query: params }));
      dispatch(setQuery(params));
    }
    if (!params) {
      dispatch(search({ query: "" }));
      dispatch(setQuery(""));
    }
  }, [dispatch, params]);
  const onSubmit = useCallback(
    ({ params }: { params: string }) => {
      dispatch(search({ query: params }));
    },
    [dispatch]
  );
  return (
    <MainLayout>
      <GenericHero
        title="Yummy!"
        description="Aquí encontrarás todas las recetas que buscas. 21 categorías y 6 robots para que puedas filtrar y encontrar más rápido tu nueva receta."
      />
      <div className="px-5 pb-10">
        <Form onSubmit={onSubmit}>
          <div className="max-w-lg sm:mx-auto flex items-center space-x-5">
            <Input
              name="params"
              type="search"
              placeholder="Introduce una receta"
              icon={{
                name: "SearchIcon",
                kind: "outline",
              }}
              {...(params && { defaultValue: params })}
            />

            <button className="btn btn-primary normal-case" type="submit">
              Buscar
            </button>
          </div>
        </Form>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800">
        <AnimatePresence>
          {results && !isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45 }}
              exit={{ opacity: 0 }}
            >
              <Container>
                <ContainerHeader>
                  {results.length > 0 && (
                    <Subtitle title="Hemos encontrado estas recetas" />
                  )}
                  {results.length === 0 && (
                    <Subtitle title="No hay resultados" />
                  )}
                </ContainerHeader>

                <ContainerContent>
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {results.map((recipe) => (
                      <CardRecipe key={recipe._id} {...recipe} />
                    ))}
                  </div>
                </ContainerContent>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MainLayout>
  );
};

export default Recipes;
