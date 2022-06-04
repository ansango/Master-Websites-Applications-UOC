import { useAppDispatch, useAppSelector } from "lib/store/hooks";
import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import Avatar from "../Avatar/Avatar";
import { Icon } from "../Icons";
import { routesDashboard, userNavRoutes } from "./routes";
import ToggleTheme from "./ToggleTheme";
import { selectUser } from "@/store/features/user";
import { signOut } from "@/store/features/user/thunks";
import { removeMyRecipes } from "@/store/features/account/myRecipes/thunks";
import { selectAccount } from "@/store/features/account/account";
import { removeAccountOnSignOut } from "@/store/features/account/account/thunks";

const User: FC = () => {
  const { pathname, replace } = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const account = useAppSelector(selectAccount);
  const onSignOut = useCallback(() => {
    replace("/");
    dispatch(signOut());
    dispatch(removeAccountOnSignOut(1000));
    dispatch(removeMyRecipes(1000));
  }, [dispatch, replace]);

  return (
    <>
      {user && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <Avatar
              size="xs"
              imgUrl={account?.avatar}
              username={user.username}
            />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <ToggleTheme />

            {userNavRoutes.map(({ label, path, icon }) => {
              const cn = routeActive(pathname, path)
                ? "bg-primary text-white"
                : "";
              return (
                <li key={path}>
                  <Link href={path}>
                    <a className={cn}>
                      <Icon kind="outline" icon={icon} className="w-4 h-4" />
                      {label}
                    </a>
                  </Link>
                </li>
              );
            })}
            <li>
              <a onClick={onSignOut}>
                <Icon kind="outline" icon="LogoutIcon" className="w-4 h-4" />
                Cerrar Sesión
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default User;
