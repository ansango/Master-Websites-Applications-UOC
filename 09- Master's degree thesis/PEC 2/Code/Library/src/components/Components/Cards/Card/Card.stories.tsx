/**
 * ?Card Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from ".";

export default {
  title: "Components/Cards/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
};

export const B_MultpleParagraphs = Template.bind({});

B_MultpleParagraphs.args = {
  title: "Noteworthy technology acquisitions 2021",
  content: [
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  ],
};

export const C_WithAction = Template.bind({});

C_WithAction.args = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  action: () => alert("Hey"),
};
