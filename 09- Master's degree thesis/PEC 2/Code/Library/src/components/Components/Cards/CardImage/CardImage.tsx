/**
 * ?CardImage Component
 */

import { FC } from "react";
import { CardImageProps } from ".";
import { Image, Paragraph, Title } from "../../../Atoms";
import { Button } from "../../Buttons";
import * as cn from "./CardImageStyles";

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardImage: FC<CardImageProps> = ({ title, content, action, imgUrl }) => {
  const simpleContent = typeof content === "string";
  return (
    <div className={cn.card}>
      <Image src={imgUrl} alt="" className={cn.img} />
      <div className={cn.content}>
        <Title title={title} />
        {simpleContent ? (
          <Paragraph content={content} />
        ) : (
          content.map((item, index) => <Paragraph key={index} content={item} />)
        )}
        <Button size="small" {...action} />
      </div>
    </div>
  );
};

export default CardImage;
