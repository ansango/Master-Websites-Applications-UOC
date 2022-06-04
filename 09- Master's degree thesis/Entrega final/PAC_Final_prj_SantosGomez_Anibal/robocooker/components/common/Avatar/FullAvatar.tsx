import Image from "next/image";
import { FC } from "react";

type FullAvatar = {
  size: "xs" | "sm" | "md" | "lg";
  imgUrl: string;
};

enum sizeFull {
  xs = "w-8",
  sm = "w-12",
  md = "w-24",
  lg = "w-32",
}

const FullAvatar: FC<FullAvatar> = ({ size, imgUrl }) => {
  const cnSize = `${sizeFull[size]} rounded-full relative`;
  return (
    <div className="avatar">
      <div className={cnSize}>
        <Image
          src={imgUrl}
          alt=""
          layout="fill"
          objectFit="contain"
          className="object-center object-cover pointer-events-none"
        />
      </div>
    </div>
  );
};

export default FullAvatar;
