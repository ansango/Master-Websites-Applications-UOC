import { RecipeDTO } from "@/models/recipe/recipe";
import React, { FC } from "react";
import Blender from "./Blender";

type Props = {
  blenders: RecipeDTO["blenders"];
};

const Blenders: FC<Props> = ({ blenders }) => {
  return (
    <>
      {blenders.map((blender, index) => (
        <Blender key={index} blender={blender} />
      ))}
    </>
  );
};

export default Blenders;
