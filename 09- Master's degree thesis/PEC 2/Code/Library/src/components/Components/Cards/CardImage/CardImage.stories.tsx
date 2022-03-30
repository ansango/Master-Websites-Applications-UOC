/**
 * ?CardImage Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardImage from ".";
import img from "../../../../../assets/image-1.jpg";

export default {
  title: "Components/Cards/Card Image",
  component: CardImage,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardImage>;

const Template: ComponentStory<typeof CardImage> = (args) => <CardImage {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  imgUrl: img,
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
  imgUrl: img,
  action: {
    label: "Learn more",
    icon: "ArrowRightIcon",
    action: () => alert("Hey"),
  },
};
