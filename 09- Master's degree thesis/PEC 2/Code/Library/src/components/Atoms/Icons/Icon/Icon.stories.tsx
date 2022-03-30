/**
 * ?Icon Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from ".";

export default {
  title: "Atoms/Icons/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classIcon: { control: false },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  icon: "AcademicCapIcon",
};

export const B_CustomIcon = Template.bind({});

B_CustomIcon.args = {
  icon: "AcademicCapIcon",
  classIcon: "text-red-800 h-16 w-16",
};
