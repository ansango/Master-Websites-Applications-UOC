/**
 * ?CardEcommerce Test
 */

import { render } from "@testing-library/react";

import CardEcommerce, { CardEcommerceProps } from ".";

const props: CardEcommerceProps = {
  onDetail: () => alert("Detail"),
  product: {
    title: "Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport",
    price: 1299.0,
    image: "/",
    rating: 5,
  },
  action: {
    label: "Add to Cart",
    action: () => alert("Add to cart"),
  },
};

describe("<CardEcommerce />", () => {
  it("should render", () => {
    render(<CardEcommerce {...props} />);
  });
  it("should render no image", () => {
    render(<CardEcommerce {...props} product={{ ...props.product, image: undefined }} />);
  });
  it("should render with rating > 5", () => {
    render(<CardEcommerce {...props} product={{ ...props.product, rating: 6 }} />);
  });
  it("should render with rating < 1", () => {
    render(<CardEcommerce {...props} product={{ ...props.product, rating: 0 }} />);
  });
  it("should render with title", () => {
    render(<CardEcommerce {...props} product={{ ...props.product, title: "Apple Watch" }} />);
  });
  it("should render with price", () => {
    render(<CardEcommerce {...props} product={{ ...props.product, price: 1299 }} />);
  });
  it("should render with action", () => {
    render(<CardEcommerce {...props} action={{ ...props.action, label: "Add to Cart" }} />);
  });
  it("should render with action", () => {
    render(
      <CardEcommerce {...props} action={{ ...props.action, action: () => alert("Add to cart") }} />
    );
  });
});
