/**
 * ?Dropdown Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from ".";

export default {
  title: "Components/Dropdowns/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

export const B_Divider = Template.bind({});

B_Divider.args = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
  divider: {
    label: "Divider",
    action: () => alert("Divider clicked"),
  },
};

export const C_Header = Template.bind({});

C_Header.args = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
  header: {
    label: "Header",
    content: "Header content",
  },
  divider: {
    label: "Divider",
    action: () => alert("Divider clicked"),
  },
};

export const D_Custom = Template.bind({});

D_Custom.args = {
  button: {
    label: "Dropdown",
    classButton: "flex items-center text-gray-800 dark:text-gray-600",
    icon: "ChevronDownIcon",
    classIcon: "h-4 w-4",
  },
  placement: "start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

export const E_SizeSmall = Template.bind({});

E_SizeSmall.args = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
  },
  size: "small",
  placement: "start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

export const F_SizeLarge = Template.bind({});

F_SizeLarge.args = {
  button: {
    label: "Dropdown",
    icon: "ChevronDownIcon",
  },
  size: "large",
  placement: "start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};
