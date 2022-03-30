/**
 * ?CardHorizontal Component
 */

import { FC } from "react";
import { CardHorizontalProps } from ".";
import { Image, Paragraph, Title } from "../../../Atoms/Blocks";
import * as cn from "./CardHorizontalStyles";

/**
 * Get started with a large variety of Tailwind CSS card examples for your web project
 */

const CardHorizontal: FC<CardHorizontalProps> = ({ title, content, action, imgUrl }) => {
  const textContent = content.length > 210 ? `${content.substring(0, 210)}...` : content;
  return (
    <div className={cn.card} onClick={action}>
      <Image src={imgUrl} alt="" className={cn.img} />

      <div className={cn.content}>
        <Title title={title} />
        <Paragraph content={textContent} />
      </div>
    </div>
  );
};

export default CardHorizontal;
