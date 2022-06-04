import Footer from "components/common/Footer/Footer";
import Navbar from "components/common/Navbar/Navbar";
import { useRouter } from "next/router";
import React, { FC, ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  children?: ReactNode;
};

const MainLayout: FC<Props> = ({ children }) => {
  const { route } = useRouter();

  return (
    <>
      <Navbar />
      <motion.main
        key={route}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25 }}
        className="h-full"
      >
        {children}
      </motion.main>

      <Footer />
    </>
  );
};

export default MainLayout;
