/**
 * ?TextArea Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import TextArea from ".";

export default {
  title: "Components/Forms/TextArea",
  component: TextArea,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const OptionOne = Template.bind({});

OptionOne.args = {};
