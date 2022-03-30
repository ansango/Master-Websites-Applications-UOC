/**
 * ?Avatar Component
 */

import { FC } from "react";
import { AvatarProps } from ".";
import { Image } from "../../Atoms/Blocks";
import * as cn from "./AvatarStyles";

/**
 * Show image for user or products
 */

const Avatar: FC<AvatarProps> = ({ imgUrl, size }) => {
  return <Image src={imgUrl} alt="" className={`${cn.bAv} ${cn.size[size]} w-`} />;
};

export default Avatar;
