import { routeActive } from "@/utils/router";
import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  currentPath?: string;
  label: string;
};

const ButtonLink: FC<Props> = ({ href, currentPath, label }) => {
  return (
    <>
      {currentPath ? (
        <Link href={href}>
          <a
            className={
              routeActive(currentPath, href)
                ? "btn btn-link normal-case text-primary dark:text-primary-content"
                : "btn btn-link normal-case text-gray-600 dark:text-base-content"
            }
          >
            {label}
          </a>
        </Link>
      ) : (
        <Link href={href}>
          <a className="font-bold text-primary dark:text-base-content hover:underline">
            {label}
          </a>
        </Link>
      )}
    </>
  );
};

export default ButtonLink;
