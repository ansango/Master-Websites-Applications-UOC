/**
 * ?CardPricing Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardPricing from ".";
import { Button } from "../../Buttons";

export default {
  title: "Components/Cards/Card Pricing",
  component: CardPricing,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof CardPricing>;

const Template: ComponentStory<typeof CardPricing> = (args) => (
  <div style={{ width: "500px" }}>
    <CardPricing {...args} />
  </div>
);

export const A_Default = Template.bind({});

A_Default.args = {
  title: "Basic plan",
  price: "19",
  currency: "€",
  period: "month",
  features: [
    {
      title: "2 team members",
      included: true,
    },
    {
      title: "Unlimited projects",
      included: true,
    },
    {
      title: "Unlimited storage",
      included: false,
    },
    {
      title: "Unlimited users",
      included: false,
    },
    {
      title: "24/7 support",
      included: false,
    },
  ],
  button: <Button label="Choose plan" fullWidth action={() => alert("Choose plan")} />,
};
