import { Step } from "@/models/recipe/recipe";
import React, { FC } from "react";

type Props = {
  step: Step;
};

const StepC: FC<Props> = ({ step: { description, position } }) => {
  return (
    <li>
      <div className="flex flex-col h-full w-full p-3 rounded-md">
        <p className="flex items-center">
          <span className="text-sm font-semibold mr-3">{position}</span>
          <span>{description}</span>
        </p>
      </div>
    </li>
  );
};

export default StepC;
