/**
 * ?ButtonGroup Test
 */

import { queryByTestId, render } from "@testing-library/react";
import ButtonGroup, { ButtonGroupProps } from ".";

const props: ButtonGroupProps = {
  buttons: [
    {
      withIcon: true,
      icon: "AcademicCapIcon",
      label: "Profile",
    },
    {
      label: "Settings",
    },
  ],
};

const props2: ButtonGroupProps = {
  kind: "outline",
  buttons: [
    {
      withIcon: true,
      icon: "AcademicCapIcon",
      label: "Profile",
    },
    {
      label: "Settings",
      disabled: true,
    },
  ],
};

describe("<ButtonGroup />", () => {
  it("should render", () => {
    const { container } = render(<ButtonGroup {...props} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    const lastButton = queryByTestId(container, "btn-group-btn-2");
    expect(firstButton).toBeTruthy();
    expect(lastButton).toBeTruthy();
  });
  it("should render with kind=outline", () => {
    const { container } = render(<ButtonGroup {...props2} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    const lastButton = queryByTestId(container, "btn-group-btn-2");
    expect(firstButton).toBeTruthy();
    expect(lastButton).toBeTruthy();
  });
  it("should render with icon", () => {
    const { container } = render(<ButtonGroup {...props} />);
    const firstButton = queryByTestId(container, "btn-group-btn-1");
    expect(firstButton).toBeTruthy();
  });
});
