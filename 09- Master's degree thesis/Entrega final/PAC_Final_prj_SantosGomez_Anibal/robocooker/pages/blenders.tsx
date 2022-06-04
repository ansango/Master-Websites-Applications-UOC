import { NextPage } from "next";
import { motion } from "framer-motion";
import GenericHero from "components/common/Hero/GenericHero";
import Card from "components/pages/categories/Card";
import MainLayout from "components/layout/MainLayout";
import { blenders } from "@/mocks/blenders";

const Blenders: NextPage = () => {
  return (
    <MainLayout>
      <GenericHero
        title="Robots de cocina"
        description="Aquí encontrarás todos los robots de cocina que estamos incluyendo. 6 robots para que puedas filtrar y encontrar más rápido tu nueva receta."
      />
      <div className="p-5">
        <div className="container mx-auto">
          <motion.ul
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {blenders.map((blender) => (
              <Card key={blender._id} data={blender} kind="blender" />
            ))}
          </motion.ul>
        </div>
      </div>
      <div className="pb-20"></div>
    </MainLayout>
  );
};

export default Blenders;
