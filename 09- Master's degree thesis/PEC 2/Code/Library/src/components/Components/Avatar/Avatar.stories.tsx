/**
 * ?Avatar Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from ".";
import imgDemo from "../../../../assets/profile-picture-3.jpg";
export default {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  size: "base",
  imgUrl: imgDemo,
};
