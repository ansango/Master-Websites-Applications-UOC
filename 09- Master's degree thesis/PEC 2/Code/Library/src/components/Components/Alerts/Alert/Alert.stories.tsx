/**
 * ?Alert Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Alert from ".";

export default {
  title: "Components/Alerts/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => <Alert {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  opened: true,
  withIcon: false,
  text: "A simple info alert with link",
  link: {
    text: "learn more",
    href: "https://example.com",
  },
};

export const B_WithIcon = Template.bind({});

B_WithIcon.args = {
  kind: "danger",
  opened: true,
  withIcon: true,
  icon: "FireIcon",
  text: "A simple danger alert with icon",
};

export const C_Dismissable = Template.bind({});

C_Dismissable.args = {
  kind: "warning",
  opened: true,
  withIcon: false,
  text: "A simple warning alert with link dismissable",
  link: {
    text: "learn more",
    href: "https://example.com",
  },
  dismissable: true,
};

export const D_Bordered = Template.bind({});

D_Bordered.args = {
  kind: "success",
  opened: true,
  withIcon: true,
  icon: "CheckCircleIcon",
  text: "A simple success alert with icon border and link",
  link: {
    text: "learn more",
    href: "https://example.com",
  },
  bordered: true,
  dismissable: true,
};
