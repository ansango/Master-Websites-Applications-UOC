/**
 * ?ButtonMonochrome Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonMonochrome from ".";

export default {
  title: "Components/Buttons/Gradient Monochrome",
  component: ButtonMonochrome,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classIcon: { control: false },
    classButton: { control: false },
  },
} as ComponentMeta<typeof ButtonMonochrome>;

const Template: ComponentStory<typeof ButtonMonochrome> = (args) => <ButtonMonochrome {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  label: "Button",
};

export const B_Shadow = Template.bind({});

B_Shadow.args = {
  label: "Button",
  kind: "shadow",
};

export const C_Style = Template.bind({});

C_Style.args = {
  label: "Button",
  style: "green",
  kind: "shadow",
};

export const D_WithIcon = Template.bind({});

D_WithIcon.args = {
  label: "Button",
  icon: "AcademicCapIcon",
  style: "pink",
};

export const E_WithLoader = Template.bind({});

E_WithLoader.args = {
  label: "Button",
  loading: true,
  kind: "solid",
};

export const F_Disabled = Template.bind({});

F_Disabled.args = {
  label: "Button",
  disabled: true,
  style: "cyan",
};

export const G_WithBadge = Template.bind({});

G_WithBadge.args = {
  label: "Button",
  badge: 9,
  style: "red",
};
