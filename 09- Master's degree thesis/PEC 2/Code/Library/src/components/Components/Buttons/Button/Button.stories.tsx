import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

export default {
  title: "Components/Buttons/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classIcon: { control: false },
    classButton: { control: false },
    classSpinner: { control: false },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  label: "Button",
};

export const B_Outline = Template.bind({});

B_Outline.args = {
  label: "Button",
  kind: "outline",
};

export const C_Style = Template.bind({});

C_Style.args = {
  label: "Button",
  style: "green",
};

export const D_Round = Template.bind({});

D_Round.args = {
  label: "Button",
  style: "purple",
  rounded: "pill",
};

export const E_WithIcon = Template.bind({});

E_WithIcon.args = {
  label: "Button",
  icon: "AcademicCapIcon",
};

export const F_WithLoader = Template.bind({});

F_WithLoader.args = {
  label: "Button",
  loading: true,
  kind: "solid",
  style: "yellow",
};

export const G_Disabled = Template.bind({});

G_Disabled.args = {
  label: "Button",
  disabled: true,
  style: "green",
};

export const H_WithBadge = Template.bind({});

H_WithBadge.args = {
  label: "Button",
  badge: 99,
  style: "red",
};

export const I_CustomButton = Template.bind({});

I_CustomButton.args = {
  label: "Button",
  classButton: "bg-red-500 px-4 py-2 rounded text-white",
};

export const J_CustomButtonWithIcon = Template.bind({});

J_CustomButtonWithIcon.args = {
  label: "Button",
  classButton: "flex items-center bg-green-600 px-2 py-3 rounded-full text-white font-bold",
  icon: "AcademicCapIcon",
};

export const K_CustomButtonCustomIcon = Template.bind({});

K_CustomButtonCustomIcon.args = {
  label: "Button",
  classButton: "flex items-center bg-purple-600 px-4 py-2 rounded text-white",
  classIcon: "text-purple-200 w-5 h-5",
  icon: "AcademicCapIcon",
};

export const L_CustomButtonCustomSpinner = Template.bind({});

L_CustomButtonCustomSpinner.args = {
  label: "Button",
  classButton: "flex items-center bg-red-500 px-4 py-2 rounded text-white",
  classSpinner: "w-6 h-6 text-red-400 fill-red-800 animate-spin",
  loading: true,
};

export const M_CustomButtonCustomBadge = Template.bind({});

M_CustomButtonCustomBadge.args = {
  label: "Button",
  classButton: "flex items-center bg-red-500 px-4 py-2 rounded text-white",
  badge: 2,
  classBadge:
    "inline-flex justify-center items-center w-4 h-4 text-xs font-semibold rounded-full text-red-500 bg-red-100",
};
