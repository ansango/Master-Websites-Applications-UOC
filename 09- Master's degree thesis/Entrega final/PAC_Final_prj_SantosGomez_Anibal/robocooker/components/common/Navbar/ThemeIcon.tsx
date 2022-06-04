import { selectUser } from "@/store/features/user";
import { useAppSelector } from "lib/store/hooks";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Icon } from "../Icons";

const ThemeIcon = () => {
  const user = useAppSelector(selectUser);
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
      <>
        {!user && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="tooltip tooltip-left"
            data-tip={theme === "light" ? "Tema oscuro" : "Tema claro"}
          >
            <button
              className="btn btn-ghost btn-circle"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              {theme === "light" ? (
                <>
                  <Icon kind="outline" icon="MoonIcon" className="w-5 h-4" />
                </>
              ) : (
                <>
                  <Icon kind="outline" icon="SunIcon" className="w-4 h-4" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </>
    );
};

export default ThemeIcon;
