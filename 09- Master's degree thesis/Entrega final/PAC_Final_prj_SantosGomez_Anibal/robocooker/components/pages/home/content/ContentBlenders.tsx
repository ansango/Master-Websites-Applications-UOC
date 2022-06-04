import { blenders } from "@/mocks/blenders";
import Card from "components/pages/categories/Card";
import { motion } from "framer-motion";


const ContentBlenders = () => {
  return (
    <motion.ul
      className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {blenders.map((blender) => {
        return <Card key={blender._id} data={blender} kind="blender" />;
      })}
    </motion.ul>
  );
};

export default ContentBlenders;
