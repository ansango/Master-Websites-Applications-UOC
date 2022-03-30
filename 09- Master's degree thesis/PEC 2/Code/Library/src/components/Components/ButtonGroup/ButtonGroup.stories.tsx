/**
 * ?ButtonGroup Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonGroup from ".";

export default {
  title: "Components/Button Group",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => <ButtonGroup {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  buttons: [
    {
      label: "Profile",
      withIcon: true,
      icon: "AcademicCapIcon",
    },
    {
      label: "Settings",
      withIcon: true,
      icon: "CogIcon",
    },
    {
      label: "Downloads",
      withIcon: true,
      icon: "DownloadIcon",
    },
  ],
};

export const B_Outline = Template.bind({});

B_Outline.args = {
  kind: "outline",
  buttons: [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
  ],
};

export const C_Info = Template.bind({});

C_Info.args = {
  style: "info",
  buttons: [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
  ],
};

export const D_Success = Template.bind({});

D_Success.args = {
  style: "success",
  buttons: [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
  ],
};

export const E_Warning = Template.bind({});

E_Warning.args = {
  style: "warning",
  buttons: [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
  ],
};

export const F_Danger = Template.bind({});

F_Danger.args = {
  style: "danger",
  buttons: [
    {
      label: "Profile",
    },
    {
      label: "Settings",
    },
  ],
};

export const G_WithClick = Template.bind({});

G_WithClick.args = {
  buttons: [
    {
      label: "Profile",
      action: () => alert("Profile"),
    },
    {
      label: "Settings",
      action: () => alert("Settings"),
    },
  ],
};

export const H_Disabled = Template.bind({});

H_Disabled.args = {
  buttons: [
    {
      label: "Profile",
    },
    {
      label: "Settings",
      disabled: true,
    },
  ],
};
