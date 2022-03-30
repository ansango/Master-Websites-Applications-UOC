/**
 * ?Avatar Test
 */

import { render } from "@testing-library/react";

import Avatar from ".";

describe("<Avatar />", () => {
  it("should render", () => {
    render(<Avatar imgUrl="/" size="base" />);
  });
});
