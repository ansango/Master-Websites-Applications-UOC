/**
 * ?Input Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from ".";

export default {
  title: "Components/Forms/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const OptionOne = Template.bind({});

OptionOne.args = {};
