import Image from "next/image";
import { FC } from "react";

type Props = {
  img: Url | null;
};

const CardHeader: FC<Props> = ({ img }) => {
  return (
    <div className="rounded-lg pt-5 px-5">
      <figure className="w-full h-44 relative">
        {img && (
          <Image
            src={img}
            loading="lazy"
            alt="hero"
            layout="fill"
            className="object-center object-cover pointer-events-none rounded-lg"
          />
        )}
      </figure>
    </div>
  );
};

export default CardHeader;
