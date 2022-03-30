/**
 * ?CardHorizontal Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import img from "../../../../../assets/image-4.jpg";
import CardHorizontal from ".";

export default {
  title: "Components/Cards/Card Horizontal",
  component: CardHorizontal,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardHorizontal>;

const Template: ComponentStory<typeof CardHorizontal> = (args) => <CardHorizontal {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the ",
  imgUrl: img,
  action: () => alert("Hey"),
};
