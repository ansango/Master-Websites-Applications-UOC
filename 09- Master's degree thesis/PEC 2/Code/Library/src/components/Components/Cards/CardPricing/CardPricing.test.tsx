/**
 * ?CardPricing Test
 */

import { render } from "@testing-library/react";

import CardPricing, { CardPricingProps } from ".";

const props: CardPricingProps = {
  action: {
    label: "Sign Up",
    action: () => console.log("Sign Up"),
  },
  title: "Card Pricing",
  price: "Rp. 100.000",
  currency: "IDR",
  period: "Monthly",
  features: [
    {
      title: "Feature 1",
      included: true,
    },
  ],
};

const props2: CardPricingProps = {
  action: {
    label: "Sign Up",
    action: () => console.log("Sign Up"),
  },
  title: "Card Pricing",
  price: "Rp. 100.000",
  currency: "IDR",
  period: "Monthly",
  features: [
    {
      title: "Feature 1",
      included: false,
    },
  ],
};

describe("<CardPricing />", () => {
  it("should render", () => {
    render(<CardPricing {...props} />);
  });
  it("should render with features no included", () => {
    render(<CardPricing {...props2} />);
  });
});
