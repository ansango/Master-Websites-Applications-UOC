/**
 * ?CardList Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardList from ".";

export default {
  title: "Components/Cards/Card List",
  component: CardList,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardList>;

const Template: ComponentStory<typeof CardList> = (args) => (
  <div style={{ width: "500px" }}>
    <CardList {...args} />
  </div>
);

export const A_Default = Template.bind({});

import u1 from "../../../../../assets/profile-picture-1.jpg";
import u2 from "../../../../../assets/profile-picture-2.jpg";
import u3 from "../../../../../assets/profile-picture-3.jpg";
import u4 from "../../../../../assets/profile-picture-4.jpg";
import u5 from "../../../../../assets/profile-picture-5.jpg";

A_Default.args = {
  title: "Latest Customers",
  detail: {
    title: "View All",
    onDetail: () => alert("Detail"),
  },
  avatar: "xsmall",
  data: [
    {
      name: "Neil Sims",
      description: "email@windster.com",
      image: u1,
    },
    {
      name: "Bonnie Green",
      description: "email@windster.com",
      image: u2,
    },
    {
      name: "Michael Gough",
      description: "email@windster.com",
      image: u3,
    },
    {
      name: "Lana Byrd",
      description: "email@windster.com",
      image: u4,
    },
    {
      name: "Thomes Lee",
      description: "email@windster.com",
      image: u5,
    },
  ],
};

export const B_SampleProducts = Template.bind({});

B_SampleProducts.args = {
  title: "Lastest Travel Packages",
  detail: {
    title: "View All",
    onDetail: () => alert("Detail"),
  },
  avatar: "xsmall",
  data: [
    {
      name: "Travel Package 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/203",
      bold: "100€",
    },
    {
      name: "Travel Package 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/200",
      bold: "200€",
    },
    {
      name: "Travel Package 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/207",
      bold: "300€",
    },
    {
      name: "Travel Package 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/209",
      bold: "400€",
    },
    {
      name: "Travel Package 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/300",
      bold: "500€",
    },
  ],
};

export const C_WithNoDetailOption = Template.bind({});

C_WithNoDetailOption.args = {
  title: "Lastest Travel Packages",
  avatar: "xsmall",
  data: [
    {
      name: "Travel Package 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/203",
      bold: "100€",
    },
    {
      name: "Travel Package 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/200",
      bold: "200€",
    },
    {
      name: "Travel Package 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/207",
      bold: "300€",
    },
    {
      name: "Travel Package 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/209",
      bold: "400€",
    },
    {
      name: "Travel Package 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://picsum.photos/300",
      bold: "500€",
    },
  ],
};
