import Footer from "components/common/Footer/Footer";
import Navbar from "components/common/Navbar/Navbar";
import { FC, ReactNode } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
type Props = {
  children?: ReactNode;
};

const AuthLayout: FC<Props> = ({ children }) => {
  const { route } = useRouter();
  return (
    <div className="h-screen flex flex-col justify-between">
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
        className="h-full"
      >
        <section className="bg-base-200 h-full py-20 md:py-0">
          <div className="max-w-md mx-auto w-full h-full flex flex-col justify-center">
            {children}
          </div>
        </section>
      </motion.main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
