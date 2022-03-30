/**
 * ?CardAction Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardAction from ".";

export default {
  title: "Components/Cards/Card Action",
  component: CardAction,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardAction>;

const Template: ComponentStory<typeof CardAction> = (args) => <CardAction {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  action: {
    label: "Learn more",
    icon: "ArrowRightIcon",
    action: () => alert("Hey"),
  },
};

export const B_MultpleParagraphs = Template.bind({});

B_MultpleParagraphs.args = {
  title: "Noteworthy technology acquisitions 2021",
  content: [
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  ],
  action: {
    label: "Learn more",
    icon: "ArrowRightIcon",
    action: () => alert("Hey"),
  },
};
