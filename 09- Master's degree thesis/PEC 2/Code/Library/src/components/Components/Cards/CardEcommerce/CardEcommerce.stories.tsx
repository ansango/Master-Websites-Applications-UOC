/**
 * ?CardEcommerce Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardEcommerce from ".";
import imgDemo from "../../../../../assets/product-1.png";
export default {
  title: "Components/Cards/Card Ecommerce",
  component: CardEcommerce,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardEcommerce>;

const Template: ComponentStory<typeof CardEcommerce> = (args) => <CardEcommerce {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  onDetail: () => alert("Detail"),
  product: {
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 1299.0,
    image: imgDemo,
    rating: 5,
  },
  action: {
    label: "Add to Cart",
    action: () => alert("Add to cart"),
  },
};

export const B_WithNoImage = Template.bind({});

B_WithNoImage.args = {
  onDetail: () => alert("Detail"),
  product: {
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 1299.0,
    rating: 5,
  },
  action: {
    label: "Add to Cart",
    action: () => alert("Add to cart"),
  },
};
