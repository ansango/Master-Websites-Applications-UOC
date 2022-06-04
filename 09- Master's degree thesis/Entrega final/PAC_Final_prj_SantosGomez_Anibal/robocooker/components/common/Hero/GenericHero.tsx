import { FC } from "react";

import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
};
const GenericHero: FC<Props> = ({ title, description }) => {
  return (
    <div className="hero h-72 bg-base-100">
      <div className="hero-content sm:text-center">
        <motion.div
          className="sm:max-w-lg"
          initial={{
            opacity: 0,
            y: "-10%",
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "tween",
            duration: 0.999999,
          }}
        >
          <h1 className="text-5xl font-bold dark:text-gray-300">{title}</h1>
          <p className="py-6 text-gray-600 dark:text-gray-400">{description}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default GenericHero;
