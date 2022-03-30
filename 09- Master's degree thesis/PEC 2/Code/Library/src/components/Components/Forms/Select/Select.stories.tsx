/**
 * ?Select Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from ".";

export default {
  title: "Components/Forms/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const OptionOne = Template.bind({});

OptionOne.args = {};
