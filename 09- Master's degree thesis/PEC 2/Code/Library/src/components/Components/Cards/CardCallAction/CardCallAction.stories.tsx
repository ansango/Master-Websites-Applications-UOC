/**
 * ?CardCallAction Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardCallAction from ".";

export default {
  title: "Components/Cards/Card Call Action",
  component: CardCallAction,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardCallAction>;

const Template: ComponentStory<typeof CardCallAction> = (args) => <CardCallAction {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  title: "Work fast from anywhere",
  description:
    "Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.",
  actions: {
    primary: {
      icon: "Apple",
      label: "Mac App Store",
      description: "Download on the",
      action: () => alert("Download on the Mac App Store"),
    },
    secondary: {
      icon: "Googleplay",
      label: "Google Play",
      description: "Get it on the",
      action: () => alert("Get it on the Google Play"),
    },
  },
};
