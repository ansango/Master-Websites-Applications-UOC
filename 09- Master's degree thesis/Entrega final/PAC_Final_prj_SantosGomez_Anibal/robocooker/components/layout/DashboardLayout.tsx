import Navbar from "components/dashboard/Navbar";
import { useRouter } from "next/router";
import React, { FC, ReactNode, useEffect } from "react";
import { motion } from "framer-motion";
import DrawerContainer from "components/dashboard/Drawer/DrawerContainer";
import WithAuth from "./WithAuth";

type Props = {
  children?: ReactNode;
};

const DashboardLayout: FC<Props> = ({ children }) => {
  const { route } = useRouter();
  return (
    <WithAuth>
      <DrawerContainer>
        <Navbar />
        <motion.main
          key={route}
          initial="initial"
          animate="animate"
          variants={{
            initial: { opacity: 0 },
            animate: { opacity: 1 },
          }}
          transition={{ delay: 0.5 }}
          className="w-full h-full relative"
        >
          <div className="absolute w-full h-full">{children}</div>
        </motion.main>
      </DrawerContainer>
    </WithAuth>
  );
};

export default DashboardLayout;
