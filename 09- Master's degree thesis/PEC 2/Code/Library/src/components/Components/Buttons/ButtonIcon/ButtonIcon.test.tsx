/**
 * ?ButtonIcon Test
 */

import { render, screen } from "@testing-library/react";

import ButtonIcon from ".";

describe("<ButtonIcon />", () => {
  it("should render", () => {
    render(<ButtonIcon icon="ArchiveIcon" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should render with outline", () => {
    render(<ButtonIcon icon="ArchiveIcon" kind="outline" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should render disabled", () => {
    render(<ButtonIcon icon="ArchiveIcon" disabled />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
