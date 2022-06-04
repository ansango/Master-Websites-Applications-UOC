import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";
import { Icon } from "components/common/Icons";
import Link from "next/link";
import { FC } from "react";

type Props = {
  href: string;
  label: string;
  icon: {
    icon: keyof typeof SolidIcons | keyof typeof OutlineIcons;
    kind: "solid" | "outline";
  };
};

const BreadcrumbLink: FC<Props> = ({ href, label, icon }) => {
  return (
    <li>
      <Link href={href}>
        <a>
          <Icon icon={icon.icon} kind={icon.kind} className="w-4 h-4 mr-2" />
          {label}
        </a>
      </Link>
    </li>
  );
};

export default BreadcrumbLink;
