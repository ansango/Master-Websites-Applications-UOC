/**
 * ?IconSimple Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import IconSimple from ".";

export default {
  title: "Atoms/Icons/Icon Simple",
  component: IconSimple,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof IconSimple>;

const Template: ComponentStory<typeof IconSimple> = (args) => <IconSimple {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  icon: "Google",
};

export const B_CustomIcon = Template.bind({});

B_CustomIcon.args = {
  icon: "Google",
  classIcon: "text-red-800 h-16 w-16",
};
