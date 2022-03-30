/**
 * ?CardFeature Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardFeature from ".";
import { Icon, IconSimple, Badge } from "../../../Atoms";

export default {
  title: "Components/Cards/Card Feature",
  component: CardFeature,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardFeature>;

const Template: ComponentStory<typeof CardFeature> = (args) => (
  <div style={{ width: "500px" }}>
    <CardFeature {...args} />
  </div>
);

export const A_DefaultIcon = Template.bind({});

A_DefaultIcon.args = {
  title: "Choose your plan",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  data: [
    {
      name: "Basic",
      icon: <Icon icon="CubeIcon" />,
    },
    {
      name: "Advanced",
      icon: <Icon icon="BadgeCheckIcon" />,
      featured: true,
      badge: <Badge label="Popular" />,
      onDetail: () => alert("Detail"),
    },
    {
      name: "Pro",
      icon: <Icon icon="CubeTransparentIcon" />,
    },
  ],
  help: {
    text: "Need help?",
    onHelp: () => alert("Need help!"),
  },
};

export const B_DefaultIconSimple = Template.bind({});

B_DefaultIconSimple.args = {
  title: "Choose your partner",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  data: [
    {
      name: "Google Cloud",
      icon: <IconSimple icon="Googlecloud" />,
    },
    {
      name: "Amazon Web Services",
      icon: <IconSimple icon="Amazonaws" />,
      featured: true,
      badge: <Badge label="Popular" />,
      onDetail: () => alert("Detail"),
    },
    {
      name: "Microsoft Azure",
      icon: <IconSimple icon="Microsoftazure" />,
    },
  ],
  help: {
    text: "Need help?",
    onHelp: () => alert("Need help!"),
  },
};
