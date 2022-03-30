/**
 * ?Accordion Component
 */

import { FC, useRef, useState } from "react";

import * as cn from "./AccordionStyles";
import * as HeroIcons from "@heroicons/react/outline";
import { Icon } from "../../../Atoms";
import { AccordionProps } from ".";

type ItemProps = {
  /**
   * string
   */
  title: string;
  /**
   * string | string[]
   */
  content: string[] | string;
  /**
   * { length: number; index: number; }
   */
  position: { length: number; index: number };
  /**
   * Heroicons
   */
  icon?: keyof typeof HeroIcons;
  /**
   * info | success | warning | danger | dark |
   */
  kind: "info" | "danger" | "success" | "warning" | "dark";
};

export const Item: FC<ItemProps> = ({ title, content, position, icon, kind }) => {
  const [isActive, setIsActive] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);
  const isFirst = position.index === 0;
  const isLast = position.index === position.length - 1;

  const rest = isLast ? cn.bLast : cn.bRest;
  const base = isFirst ? cn.bFirst : rest;
  const cnKind = `${base} ${cn.bKind[kind]}`;
  const btn = isActive ? ` ${cn.bActiveKind[kind]} ${cnKind}` : cnKind;

  const cont = isLast ? `${cn.cLast}` : `${cn.cBase}`;
  const simpleContent = typeof content === "string";
  return (
    <div className={cn.itemBase} data-testid={`accordion-item-${position.index + 1}`}>
      <button
        type="button"
        className={btn}
        onClick={() => setIsActive(!isActive)}
        data-testid={`accordion-item-btn-${position.index + 1}`}
      >
        <span className={cn.sBase}>
          {icon && <Icon icon={icon} classIcon={cn.iWithTitle} />} {title}
        </span>
        <Icon icon="ChevronDownIcon" classIcon={isActive ? cn.iRotate : cn.iBase} />
      </button>

      <div
        ref={contentEl}
        className={cn.cAnimation}
        style={isActive ? { height: `${contentEl.current?.scrollHeight}px` } : { height: 0 }}
        data-testid={`accordion-item-content-${position.index + 1}`}
      >
        <div className={cont}>
          {simpleContent ? (
            <p className={cn.tBase}>{content}</p>
          ) : (
            content.map((item, index) => (
              <p key={index} className={cn.tBase}>
                {item}
              </p>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

/**
 * Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options
 */

const Accordion: FC<AccordionProps> = ({ data, kind = "dark" }) => {
  const { length } = data;

  return (
    <div>
      {data.map(({ title, content, icon }, index) => {
        const position = { index, length };
        return <Item key={index} {...{ title, content, icon, position, kind }} />;
      })}
    </div>
  );
};

export default Accordion;
