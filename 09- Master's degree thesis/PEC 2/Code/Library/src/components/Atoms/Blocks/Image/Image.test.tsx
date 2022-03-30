/**
 * ?Image Test
 */

import { render } from "@testing-library/react";

import Image from ".";

describe("<Image />", () => {
  it("should render", () => {
    render(<Image src="https://via.placeholder.com/150" alt="placeholder" />);
  });
  it("should render with Image NextJS", () => {
    render(<Image src="https://via.placeholder.com/150" alt="placeholder" ImageNextJS={Image} />);
  });
});
