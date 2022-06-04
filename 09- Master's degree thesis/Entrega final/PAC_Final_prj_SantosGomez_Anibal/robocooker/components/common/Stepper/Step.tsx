import { FC, ReactNode } from "react";
import * as SolidIcons from "@heroicons/react/solid";
import * as OutlineIcons from "@heroicons/react/outline";
import useCollapse from "react-collapsed";
import { Icon } from "../Icons";
import ArrowIcon from "./ArrowIcon";
import Title from "./Title";
import Toggle from "./Toggle";
import Collapse from "./Collapse";
import StepContainer from "./StepContainer";

type Props = {
  expanded?: boolean;
  step: number;
  children: ReactNode;
  title: string;
  icon: {
    type: keyof typeof SolidIcons | keyof typeof OutlineIcons;
    kind: "solid" | "outline";
  };
};

const Step: FC<Props> = ({ expanded = false, step, children, icon, title }) => {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse({
    defaultExpanded: expanded,
  });
  return (
    <div>
      <Toggle getToggleProps={getToggleProps}>
        <Title title={title}>
          <Icon icon={icon.type} kind={icon.kind} className="w-5 h-5" />
        </Title>

        <ArrowIcon isExpanded={isExpanded} />
      </Toggle>
      <Collapse getCollapseProps={getCollapseProps}>
        <StepContainer>{children}</StepContainer>
      </Collapse>
    </div>
  );
};
export default Step;
