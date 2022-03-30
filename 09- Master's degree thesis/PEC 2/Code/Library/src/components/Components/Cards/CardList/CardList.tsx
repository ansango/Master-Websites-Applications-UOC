/**
 * ?CardList Component
 */

import { FC } from "react";
import { CardListProps } from ".";
import Avatar from "../../Avatar";

import * as cn from "./CardListStyles";

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardList: FC<CardListProps> = ({ title, data, detail, avatar }) => {
  return (
    <div className={cn.card}>
      <div className={cn.header}>
        <h3 className={cn.title}>{title}</h3>
        {detail && (
          <span className={cn.action} onClick={detail.onDetail}>
            {detail.title}
          </span>
        )}
      </div>
      <div className={cn.body}>
        <ul role="list" className={cn.list}>
          {data.map(({ name, description, image, bold }, index) => (
            <li key={index} className={cn.listItem}>
              <div className={cn.listItemCont}>
                <div className={cn.lAvatar}>
                  <Avatar size={avatar} imgUrl={image} />
                </div>
                <div className={cn.contName}>
                  <p className={cn.name}>{name}</p>
                  <p className={cn.desc}>{description}</p>
                </div>
                {bold && <div className={cn.bold}>{bold}</div>}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardList;
