/**
 * ?Radio Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioGroup from ".";

export default {
  title: "Components/Forms/Radio",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => <RadioGroup {...args} />;

export const OptionOne = Template.bind({});

OptionOne.args = {};
