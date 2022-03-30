/**
 * ?CardEcommerce Component
 */

import { FC } from "react";
import { CardEcommerceProps } from ".";
import { Badge, Icon, Image } from "../../../Atoms";
import { Button } from "../../Buttons";
import * as cn from "./CardEcommerceStyles";

const NoImage = () => (
  <div className={cn.nIcontainer}>
    <div className={cn.nImg}></div>
  </div>
);

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardEcommerce: FC<CardEcommerceProps> = ({ product, action, onDetail }) => {
  const { title, price, image, rating } = product;
  const lessThanOne = rating < 1;
  const moreThanFive = rating > 5;
  const stars = moreThanFive ? 5 : rating;
  return (
    <div className={cn.card}>
      <span onClick={onDetail}>
        {!image && <NoImage />}
        {image && (
          <div className={cn.cIcontainer}>
            <Image src={image} alt="Product" className={cn.cImg} />
          </div>
        )}
      </span>
      <div className={cn.cContainer}>
        <h3 className={cn.cTitle} onClick={onDetail}>
          {title}
        </h3>

        <div className={cn.cRating}>
          {!lessThanOne && (
            <>
              <div className={cn.cStars}>
                {Array(stars)
                  .fill(0)
                  .map((_, i) => (
                    <Icon icon="StarIcon" classIcon={cn.cStar} key={i} />
                  ))}
              </div>
              <Badge label={`${stars}`} />
            </>
          )}
        </div>
        <div className={cn.cPriceContainer}>
          <span className={cn.cPrice}>{price} €</span>
          <Button label={action.label} action={action.action} />
        </div>
      </div>
    </div>
  );
};

export default CardEcommerce;
