/**
 * ?CardHorizontal Test
 */

import { render } from "@testing-library/react";
import { mount } from "enzyme";
import CardHorizontal, { CardHorizontalProps } from ".";
import { Paragraph } from "../../../Atoms";

const props: CardHorizontalProps = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  imgUrl: "/assets/image-1.jpg",
  action: () => alert("Hey"),
};

const props2: CardHorizontalProps = {
  title: "Noteworthy technology acquisitions 2021",
  content:
    "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  imgUrl: "/assets/image-1.jpg",
  action: () => alert("Hey"),
};

describe("<CardHorizontal />", () => {
  it("should render", () => {
    render(<CardHorizontal {...props} />);
  });
  it("should render with content long > 210", () => {
    const wrapper = mount(<CardHorizontal {...props2} />);
    expect(wrapper.find(Paragraph).text()).toEqual(
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. He..."
    );
  });
});
