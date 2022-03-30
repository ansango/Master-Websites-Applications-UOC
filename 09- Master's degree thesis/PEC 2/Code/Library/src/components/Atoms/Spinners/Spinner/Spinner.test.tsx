/**
 * ?Spinner Test
 */

import { render } from "@testing-library/react";

import Spinner, { SpinnerProps } from ".";

const props: SpinnerProps = {
  size: "small",
};



describe("<Spinner />", () => {
  it("should render", () => {
    render(<Spinner {...props} />);
  });
  it("should render with no props passed", () => {
    render(<Spinner />);
  });
});
