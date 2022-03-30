/**
 * ?DropdownIcon Test
 */

import { fireEvent, queryByTestId, render, waitFor } from "@testing-library/react";

import DropdownIcon, { DropdownIconProps } from ".";

const props: DropdownIconProps = {
  button: {
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "start",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

const props2: DropdownIconProps = {
  button: {
    icon: "ChevronDownIcon",
    classIcon: "h-5 w-5",
  },
  placement: "end",
  options: [
    {
      label: "Option 1",
      action: () => alert("Option 1 clicked"),
    },
  ],
};

describe("<DropdownIcon />", () => {
  it("should render", () => {
    render(<DropdownIcon {...props} />);
  });
  it("should render with options as array", () => {
    const { container } = render(<DropdownIcon {...props} />);
    const dropdown = queryByTestId(container, "dropdown-button");
    if (dropdown) {
      dropdown.click();
      const options = queryByTestId(container, "dropdown-option-1");
      expect(options).toBeTruthy();
    }
  });
  it("should clicked outside dropdown", async () => {
    const { container } = render(<DropdownIcon {...props} />);
    const dropdown = queryByTestId(container, "dropdown-button");

    dropdown?.click();

    const options = queryByTestId(container, "dropdown-option-1");
    expect(options).toBeTruthy();

    fireEvent.click(document);
    await waitFor(() => {
      expect(queryByTestId(container, "dropdown-option-1")).toBeFalsy();
    });
  });
  it("should render with placement end", () => {
    const { container } = render(<DropdownIcon {...props2} />);
    const dropdown = queryByTestId(container, "dropdown-button");
    if (dropdown) {
      dropdown.click();
      const options = queryByTestId(container, "dropdown-option-1");
      expect(options).toBeTruthy();
    }
  });
  it("should render with header and divider", () => {
    const { container } = render(
      <DropdownIcon
        {...props}
        header={{
          label: "Header",
          content: "Content",
        }}
        divider={{
          label: "Divider",
          action: () => alert("Divider clicked"),
        }}
      />
    );
    const dropdown = queryByTestId(container, "dropdown-button");
    if (dropdown) {
      dropdown.click();
      const options = queryByTestId(container, "dropdown-option-1");
      expect(options).toBeTruthy();
    }
  });
});
