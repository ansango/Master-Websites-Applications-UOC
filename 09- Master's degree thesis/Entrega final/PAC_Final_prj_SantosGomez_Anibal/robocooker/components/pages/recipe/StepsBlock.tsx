import { RecipeDTO } from "@/models/recipe/recipe";
import { selectUser } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import ButtonLink from "components/common/Button/ButtonLink";
import { Icon } from "components/common/Icons";
import React, { FC } from "react";
import Steps from "./Steps";
import Subtitle from "./Subtitle";

type Props = {
  steps: RecipeDTO["steps"];
};

const StepsBlock: FC<Props> = ({ steps }) => {
  const user = useAppSelector(selectUser);
  const cn = !user ? "relative h-60 overflow-hidden" : "";
  return (
    <article className={cn}>
      {!user && (
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-base-100 to-base-100">
          <div className="space-y-5 px-3 flex sm:justify-end items-end space-x-2 absolute bottom-0 right-0">
            <Icon
              icon="LoginIcon"
              kind="outline"
              className="text-primary w-5 h-5 mb-0.5"
            />
            <ButtonLink
              href="/signin"
              label="Inicia session para ver los pasos"
            />
          </div>
        </div>
      )}
      <div className="p-5 rounded-lg space-y-3 bg-base-200">
        <div className="flex items-center space-x-2 px-3">
          <Subtitle text="Preparación" />
          <Icon
            icon="BeakerIcon"
            kind="outline"
            className="w-6 h-6 text-accent-focus"
          />
        </div>
        <Steps steps={steps} />
      </div>
    </article>
  );
};

export default StepsBlock;
