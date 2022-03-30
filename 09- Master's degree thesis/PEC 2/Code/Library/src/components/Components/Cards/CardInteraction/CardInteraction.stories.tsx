/**
 * ?CardInteraction Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardInteraction from ".";
import imgDemo from "../../../../../assets/profile-picture-3.jpg";

export default {
  title: "Components/Cards/Card Interaction",
  component: CardInteraction,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardInteraction>;

const Template: ComponentStory<typeof CardInteraction> = (args) => (
  <div style={{ width: "500px" }}>
    <CardInteraction {...args} />
  </div>
);

export const A_Default = Template.bind({});

A_Default.args = {
  header: {
    activeHeader: false,
  },
  content: {
    title: "Bonnie Green",
    subtitle: "Visual Designer",
  },
  actions: {
    activeActions: false,
  },
};

export const B_With_Avatar = Template.bind({});

B_With_Avatar.args = {
  header: {
    activeHeader: false,
  },
  content: {
    avatar: imgDemo,
    title: "Bonnie Green",
    subtitle: "Visual Designer",
  },
  actions: {
    activeActions: false,
  },
};

export const C_With_Header = Template.bind({});

C_With_Header.args = {
  header: {
    activeHeader: true,
    dropIcon: "DotsVerticalIcon",
    options: [
      {
        label: "Edit",
        action: () => alert("Edit"),
      },
    ],
  },
  content: {
    avatar: imgDemo,
    title: "Bonnie Green",
    subtitle: "Visual Designer",
  },
  actions: {
    activeActions: false,
  },
};

export const D_With_Actions = Template.bind({});

D_With_Actions.args = {
  header: {
    activeHeader: false,
  },
  content: {
    avatar: imgDemo,
    title: "Bonnie Green",
    subtitle: "Visual Designer",
  },
  actions: {
    activeActions: true,
    primary: {
      label: "Edit",
      action: () => alert("Edit"),
    },
  },
};

export const E_With_Header_And_Actions = Template.bind({});

E_With_Header_And_Actions.args = {
  header: {
    activeHeader: true,
    dropIcon: "DotsVerticalIcon",
    options: [
      {
        label: "Edit",
        action: () => alert("Edit"),
      },
    ],
  },
  content: {
    avatar: imgDemo,
    title: "Bonnie Green",
    subtitle: "Visual Designer",
  },
  actions: {
    activeActions: true,
    primary: {
      label: "Add friend",
      action: () => alert("Add friend"),
    },
    secondary: {
      label: "Message",
      action: () => alert("Message"),
    },
  },
};
