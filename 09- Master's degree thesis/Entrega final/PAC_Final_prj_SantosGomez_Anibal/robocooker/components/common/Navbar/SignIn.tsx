import { selectUser } from "@/store/features/user";
import { useAppSelector } from "lib/store/hooks";
import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import Icon from "../Icons/Icon";

const SignIn: FC = () => {
  const { pathname } = useRouter();
  const user = useAppSelector(selectUser);
  const isActive = routeActive(pathname, "/signin");
  return (
    <>
      {!user && (
        <Link href="/signin" passHref>
          <div className="tooltip tooltip-left" data-tip="Iniciar sesión">
            <button className="btn btn-ghost btn-circle">
              <Icon
                icon="LoginIcon"
                kind="outline"
                className={isActive ? "h-5 w-5 text-primary" : "h-5 w-5"}
              />
            </button>
          </div>
        </Link>
      )}
    </>
  );
};

export default SignIn;
