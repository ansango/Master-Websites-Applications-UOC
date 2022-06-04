import { useRouter } from "next/router";
import { routes } from "./routes";
import { motion } from "framer-motion";
import ButtonLink from "../Button/ButtonLink";

const NavDesktop = () => {
  const { pathname } = useRouter();
  return (
    <ul className="hidden w-full md:flex md:w-auto ml-3">
      {routes.map(({ label, path }) => {
        return (
          <li key={path}>
            <ButtonLink href={path} label={label} currentPath={pathname} />
          </li>
        );
      })}
    </ul>
  );
};

export default NavDesktop;
