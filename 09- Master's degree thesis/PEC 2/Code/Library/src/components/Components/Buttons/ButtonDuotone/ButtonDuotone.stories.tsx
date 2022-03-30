/**
 * ?ButtonDuotone Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonDuotone from ".";

export default {
  title: "Components/Buttons/Gradient Duotone",
  component: ButtonDuotone,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classIcon: { control: false },
    classButton: { control: false },
  },
} as ComponentMeta<typeof ButtonDuotone>;

const Template: ComponentStory<typeof ButtonDuotone> = (args) => <ButtonDuotone {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  label: "Button",
};

export const B_Style = Template.bind({});

B_Style.args = {
  label: "Button",
  style: "green",
};

export const C_WithIcon = Template.bind({});

C_WithIcon.args = {
  label: "Button",
  icon: "AcademicCapIcon",
};

export const D_WithLoader = Template.bind({});

D_WithLoader.args = {
  label: "Button",
  loading: true,
};

export const F_Disabled = Template.bind({});

F_Disabled.args = {
  label: "Button",
  disabled: true,
};

export const G_WithBadge = Template.bind({});

G_WithBadge.args = {
  label: "Button",
  badge: 10,
  style: "lime",
};
