import { Blender } from "@/models/blender";
import { Category } from "lib/models/recipe/category";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
type Props = {
  data: Category | Blender;
  kind: "category" | "blender";
};
const Card: FC<Props> = ({ data: { _id, img, name }, kind }) => {
  const link = `/${kind}/${name.split(" ").join("-")}`;
  return (
    <motion.li
      whileHover={{ scale: 1.007 }}
      whileTap={{ scale: 1 }}
      key={_id}
      className="cursor-pointer"
    >
      <Link href={link} passHref>
        <div className="card w-full bg-base-100 shadow-xl image-full before:opacity-40">
          <figure className="w-full h-44 lg:h-52 relative">
            <Image
              src={img}
              loading="lazy"
              alt="hero"
              layout="fill"
              className="object-center object-cover pointer-events-none"
            />
          </figure>
          <div className="card-body justify-end p-5">
            <h2 className="card-title capitalize text-white">{name}</h2>
          </div>
        </div>
      </Link>
    </motion.li>
  );
};

export default Card;
