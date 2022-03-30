/**
 * ?CardImage Test
 */

import { render } from "@testing-library/react";

import CardImage, { CardImageProps } from ".";

const props: CardImageProps = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  imgUrl: "/assets/image-1.jpg",
  action: {
    label: "Learn more",
    icon: "ArrowRightIcon",
    action: () => alert("Hey"),
  },
};

const props2: CardImageProps = {
  title: "Noteworthy technology acquisitions 2021",
  content: [
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  ],

  imgUrl: "/assets/image-1.jpg",
  action: {
    label: "Learn more",
    icon: "ArrowRightIcon",
    action: () => alert("Hey"),
  },
};

describe("<CardImage />", () => {
  it("should render", () => {
    render(<CardImage {...props} />);
  });
  it("should render with content as array", () => {
    render(<CardImage {...props2} />);
  });
});
