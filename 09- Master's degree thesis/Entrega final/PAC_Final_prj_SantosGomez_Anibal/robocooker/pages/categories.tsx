import { NextPage } from "next";
import { motion } from "framer-motion";
import GenericHero from "components/common/Hero/GenericHero";
import Card from "components/pages/categories/Card";
import MainLayout from "components/layout/MainLayout";
import { categories } from "@/mocks/categories";

const Categories: NextPage = () => {
  return (
    <MainLayout>
      <GenericHero
        title="Categorías"
        description="Aquí encontrarás todas las categorías de recetas. 21 categorías para que puedas filtrar y encontrar más rápido tu nueva receta."
      />
      <div className="p-5">
        <div className="container mx-auto">
          <motion.ul
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {categories.map((category) => (
              <Card key={category._id} data={category} kind="category" />
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="pb-20"></div>
    </MainLayout>
  );
};

export default Categories;
