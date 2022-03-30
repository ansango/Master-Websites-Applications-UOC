/**
 * ?Switch Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Switch from ".";

export default {
  title: "Components/Forms/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const OptionOne = Template.bind({});

OptionOne.args = {};
