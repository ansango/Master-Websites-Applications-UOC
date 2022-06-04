import { RecipeDTO } from "@/models/recipe/recipe";
import React, { FC } from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardFooter from "./CardFooter";
import Link from "next/link";

type Props = {
  name: RecipeDTO["name"];
  description: RecipeDTO["description"];
  img: RecipeDTO["img"];
  categories: RecipeDTO["categories"];
  servings: RecipeDTO["servings"];
  duration: RecipeDTO["duration"];
  id: RecipeDTO["_id"];
  likes: RecipeDTO["likes"];
};

const CardRecipe: FC<Props> = ({
  name,
  description,
  img,
  categories,
  servings,
  duration,
  id,
  likes,
}) => {
  const body = {
    name,
    description,
    categories,
  };
  const footer = {
    servings,
    duration,
    likes: likes.length,
  };
  return (
    <div className="card compact bg-base-100 shadow-md transform hover:scale-[1.005] hover:shadow-lg transition duration-250 ease-out hover:ease-in">
      <Link href={`/recipe/${id}`}>
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
