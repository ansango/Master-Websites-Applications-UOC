/**
 * ?AlertContent Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import AlertContent from ".";

export default {
  title: "Components/Alerts/Alert Content",
  component: AlertContent,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof AlertContent>;

const Template: ComponentStory<typeof AlertContent> = (args) => <AlertContent {...args} />;

export const A_Info = Template.bind({});

A_Info.args = {
  title: "Alert Title",
  kind: "info",
  icon: "InformationCircleIcon",
  content:
    "More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
  opened: true,
  dismissable: true,
};

export const B_Danger = Template.bind({});

B_Danger.args = {
  title: "Alert Title",
  kind: "danger",
  icon: "InformationCircleIcon",
  content:
    "More info about this danger alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
  opened: true,
  dismissable: true,
};

export const C_Success = Template.bind({});

C_Success.args = {
  title: "Alert Title",
  kind: "success",
  icon: "InformationCircleIcon",
  content:
    "More info about this success alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
  opened: true,
  dismissable: true,
};

export const D_Warning = Template.bind({});

D_Warning.args = {
  title: "Alert Title",
  kind: "warning",
  icon: "InformationCircleIcon",
  content:
    "More info about this warning alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
  opened: true,
  dismissable: true,
};

export const E_Dark = Template.bind({});

E_Dark.args = {
  title: "Alert Title",
  kind: "dark",
  icon: "InformationCircleIcon",
  content:
    "More info about this dark alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.",
  opened: true,
  dismissable: true,
};
