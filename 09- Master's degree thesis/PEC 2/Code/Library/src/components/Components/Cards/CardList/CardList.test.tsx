/**
 * ?CardList Test
 */

import { render } from "@testing-library/react";

import CardList, { CardListProps } from ".";

const props: CardListProps = {
  title: "Card List",
  data: [
    {
      name: "Card 1",
      description: "Card 1 description",
      image: "https://via.placeholder.com/150",
      bold: "bold",
    },
  ],
  detail: {
    title: "Detail",
    onDetail: () => console.log("Detail"),
  },
  avatar: "xsmall",
};

describe("<CardList />", () => {
  it("should render", () => {
    render(<CardList {...props} />);
  });
});
