/**
 * ?Card Test
 */

import { render } from "@testing-library/react";

import Card, { CardProps } from ".";
const props: CardProps = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
};
const props2: CardProps = {
  title: "Noteworthy technology acquisitions 2021",
  content: [
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  ],
};

describe("<Card />", () => {
  it("should render", () => {
    render(<Card {...props} />);
  });
  it("should render with content as array", () => {
    render(<Card {...props2} />);
  });
});
