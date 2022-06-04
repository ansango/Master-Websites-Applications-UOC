import { RecipeDTO } from "@/models/recipe/recipe";
import React, { FC } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import Link from "next/link";
const CardRecipe: FC<RecipeDTO> = ({
  name,
  description,
  img,
  categories,
  servings,
  duration,
  _id,
  account: { avatar, username },
}) => {
  const body = {
    name,
    description,
    categories,
  };
  const footer = {
    servings,
    duration,
    avatar,
    username,
  };
  return (
    <div className="card compact bg-base-100 shadow-md transform hover:scale-[1.005] hover:shadow-lg transition duration-250 ease-out hover:ease-in">
      <Link href={`/recipe/${_id}`}>
        <a>
          <CardHeader img={img} />
          <CardBody {...body} />
        </a>
      </Link>
      <CardFooter {...footer} />
    </div>
  );
};

export default CardRecipe;
