import { routeActive } from "@/utils/router";
import { Icon, Logo } from "components/common/Icons";
import { routes, routesDashboard } from "components/common/Navbar/routes";
import Link from "next/link";
import { useRouter } from "next/router";

const DrawerBar = () => {
  const { pathname } = useRouter();
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content border-r">
        <div className="flex flex-col w-full">
          <div className="">
            <li>
              <Link href="/" passHref>
                <a
                  className={
                    routeActive(pathname, "/") ? "bg-primary text-white" : ""
                  }
                >
                  <Logo
                    className={
                      routeActive(pathname, "/")
                        ? "w-5 h-5 fill-primary dark:fill-gray-200"
                        : "w-5 h-5 fill-primary dark:fill-gray-400"
                    }
                  />
                  Inicio
                </a>
              </Link>
            </li>
            {routes.map(({ label, path, icon }) => {
              const cn = routeActive(pathname, path)
                ? "bg-primary text-white"
                : "";
              return (
                <li key={path}>
                  <Link href={path}>
                    <a className={cn}>
                      <Icon icon={icon} kind="outline" className="w-5 h-5" />
                      {label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </div>

          <div className="divider my-3"></div>
          {routesDashboard.map(({ label, path, icon }) => {
            const cn = routeActive(pathname, path)
              ? "bg-primary text-white"
              : "";
            return (
              <li key={path}>
                <Link href={path}>
                  <a className={cn}>
                    <Icon icon={icon} kind="outline" className="w-5 h-5" />
                    {label}
                  </a>
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default DrawerBar;
