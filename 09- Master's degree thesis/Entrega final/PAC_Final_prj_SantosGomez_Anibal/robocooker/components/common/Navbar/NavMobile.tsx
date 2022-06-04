import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Icon from "../Icons/Icon";
import { routes } from "./routes";

const NavMobile: FC = () => {
  const { pathname } = useRouter();
  return (
    <div className="dropdown md:hidden">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <Icon icon="MenuAlt2Icon" kind="outline" className="w-5 h-5" />
      </label>
      <ul
        tabIndex={0}
        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
      >
        {routes.map(({ label, path, icon }) => {
          const cn = routeActive(pathname, path) ? "bg-primary text-white" : "";
          return (
            <li key={path}>
              <Link href={path}>
                <a className={cn}>
                  <Icon icon={icon} kind="outline" className="w-4 h-4" />
                  {label}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavMobile;
