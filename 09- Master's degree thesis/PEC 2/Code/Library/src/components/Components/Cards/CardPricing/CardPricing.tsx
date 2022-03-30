/**
 * ?CardPricing Component
 */

import { FC } from "react";
import { CardPricingProps } from ".";
import { Icon } from "../../../Atoms";

import * as cn from "./CardPricingStyles";

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardPricing: FC<CardPricingProps> = ({
  title,
  price,
  currency,
  period,
  features,
  button,
}) => {
  return (
    <div className={cn.card}>
      <h3 className={cn.title}>{title}</h3>
      <div className={cn.info}>
        <span className={cn.price}>{price}</span>
        <span className={cn.currency}>{currency}</span>
        <span className={cn.period}>/{period}</span>
      </div>

      <ul role="list" className={cn.list}>
        {features.map(({ title: itemTitle, included }, index) => (
          <li key={index} className={included ? cn.includedItem : cn.notIncludedItem}>
            <Icon icon="CheckCircleIcon" classIcon={included ? cn.incIcon : cn.notIncIcon} />
            <span className={cn.itemTitle}>{itemTitle}</span>
          </li>
        ))}
      </ul>
      <div className={cn.btnCont}>{button}</div>
    </div>
  );
};

export default CardPricing;
