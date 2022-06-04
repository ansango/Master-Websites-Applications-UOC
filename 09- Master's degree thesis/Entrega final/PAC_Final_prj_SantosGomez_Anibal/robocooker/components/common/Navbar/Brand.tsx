import { routeActive } from "@/utils/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { Logo } from "../Icons";

const Brand: FC = () => {
  const { pathname } = useRouter();
  return (
    <Link href="/" passHref>
      <button className="btn btn-ghost btn-circle">
        <Logo
          className={
            routeActive(pathname, "/")
              ? "w-5 h-5 fill-primary dark:fill-gray-200"
              : "w-5 h-5 fill-primary dark:fill-gray-400"
          }
        />
      </button>
    </Link>
  );
};

export default Brand;
