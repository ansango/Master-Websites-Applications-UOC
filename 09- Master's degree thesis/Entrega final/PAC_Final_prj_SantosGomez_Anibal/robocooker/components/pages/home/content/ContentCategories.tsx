import { categories } from "@/mocks/categories";
import Card from "components/pages/categories/Card";
import { motion } from "framer-motion";


const ContentCategories = () => {
  return (
    <>
      <motion.ul
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {categories.slice(0, 9).map((category) => (
          <Card key={category._id} data={category} kind="category" />
        ))}
      </motion.ul>
    </>
  );
};

export default ContentCategories;
