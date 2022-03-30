/**
 * ?Breadcrumb Component
 */

import { FC } from "react";
import { BreadcrumbProps } from ".";
import { Icon } from "../../Atoms";

import * as cn from "./BreadcrumbStyles";

/**
 * Show the location of the current page in a hierarchical structure using the Tailwind CSS breadcrumb components
 */

const Breadcrumb: FC<BreadcrumbProps> = ({ routes, kind = "plain" }) => {
  return (
    <nav className={cn.bKind[kind]} aria-label="Breadcrumb">
      <ol className={cn.lBase}>
        {routes.map(({ title, level, LinkElement, current }) => {
          const isLevelOne = level === 1;
          return (
            <li key={level} className={cn.lItem}>
              {!current && LinkElement ? (
                <LinkElement>
                  <span className={cn.tLink}>
                    {!isLevelOne && <Icon icon="ChevronRightIcon" classIcon={cn.iArrow} />}
                    {isLevelOne && <Icon icon="HomeIcon" classIcon={cn.iBase} />}
                    {title}
                  </span>
                </LinkElement>
              ) : (
                <div>
                  <span className={cn.tCurrent}>
                    <Icon icon="ChevronRightIcon" classIcon={cn.iArrow} />
                    {title}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
