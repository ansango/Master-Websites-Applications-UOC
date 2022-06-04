import { RecipeDTO } from "@/models/recipe/recipe";
import Image from "next/image";
import { FC } from "react";

type Props = {
  img: RecipeDTO["img"];
  name: RecipeDTO["name"];
};

const Hero: FC<Props> = ({ img, name }) => {
  return (
    <div className="card w-full bg-base-100 shadow-lg image-full before:opacity-50">
      <figure className="w-full h-96 relative">
        <Image
          src={img}
          priority
          alt="hero"
          layout="fill"
          className="object-center object-cover pointer-events-none"
        />
      </figure>
      <div className="card-body justify-end p-5">
        <h1 className="card-title text-gray-50 dark:text-gray-200 text-2xl md:text-4xl shadow-sm">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
