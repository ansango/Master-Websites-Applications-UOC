import { RecipeDTO } from "@/models/recipe/recipe";
import { FC } from "react";
import StepC from "./Step";

type Props = {
  steps: RecipeDTO["steps"];
};

const Steps: FC<Props> = ({ steps }) => {
  return (
    <ul className="space-y-5">
      {steps.map((step, index) => (
        <StepC key={index} step={step} />
      ))}
    </ul>
  );
};

export default Steps;
