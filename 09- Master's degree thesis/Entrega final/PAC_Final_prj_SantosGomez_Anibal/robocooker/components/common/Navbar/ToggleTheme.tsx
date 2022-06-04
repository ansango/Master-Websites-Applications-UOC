import { FC, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Icon } from "../Icons";
import { motion } from "framer-motion";
const ToggleTheme: FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [theme]);
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <li>
        <a>
          {theme === "light" ? (
            <>
              <Icon kind="outline" icon="MoonIcon" className="w-4 h-4" />
              Tema oscuro
            </>
          ) : (
            <>
              <Icon kind="outline" icon="SunIcon" className="w-4 h-4" />
              Tema claro
            </>
          )}
        </a>
      </li>
    </motion.button>
  );
};

export default ToggleTheme;
