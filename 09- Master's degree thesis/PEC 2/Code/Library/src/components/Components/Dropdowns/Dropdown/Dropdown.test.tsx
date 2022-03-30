/**
 * ?Dropdown Test
 */

import { queryByTestId, render, waitFor, fireEvent } from "@testing-library/react";

import Dropdown, { DropdownProps } from ".";

const props: DropdownProps = {
  button: {
    label: "Dropdown",
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

const props2: DropdownProps = {
  button: {
    label: "Dropdown",
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

describe("<Dropdown />", () => {
  it("should render", () => {
    render(<Dropdown {...props} />);
  });
  it("should render with options as array", () => {
    const { container } = render(<Dropdown {...props} />);
    const dropdown = queryByTestId(container, "dropdown-button");
    if (dropdown) {
      dropdown.click();
      const options = queryByTestId(container, "dropdown-option-1");
      expect(options).toBeTruthy();
    }
  });
  it("should clicked outside dropdown", async () => {
    const { container } = render(<Dropdown {...props} />);
    const dropdown = queryByTestId(container, "dropdown-button");

    dropdown?.click();

    const options = queryByTestId(container, "dropdown-option-1");
    expect(options).toBeTruthy();

    fireEvent.click(document);
    await waitFor(() => {
      expect(queryByTestId(container, "dropdown-option-1")).toBeFalsy();
    });
  });
  it("should render with placement top-start", () => {
    const { container } = render(<Dropdown {...props} />);
    const dropdown = queryByTestId(container, "dropdown-button");
    if (dropdown) {
      dropdown.click();
      const options = queryByTestId(container, "dropdown-option-1");
      expect(options).toBeTruthy();
    }
  });
  it("should render with header and divider", () => {
    const { container } = render(
      <Dropdown
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
  it("should render with placement start", () => {
    const { container } = render(<Dropdown {...props} />);
    const dropdown = queryByTestId(container, "dropdown-button");
    if (dropdown) {
      dropdown.click();
      const options = queryByTestId(container, "dropdown-option-1");
      expect(options).toBeTruthy();
    }
  });
  it("should render with placement end", () => {
    const { container } = render(<Dropdown {...props2} />);
    const dropdown = queryByTestId(container, "dropdown-button");
    if (dropdown) {
      dropdown.click();
      const options = queryByTestId(container, "dropdown-option-1");
      expect(options).toBeTruthy();
    }
  });
});
