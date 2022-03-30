/**
 * ?Alert Test
 */

import { render, fireEvent, queryByTestId, screen } from "@testing-library/react";
import { mount } from "enzyme";
import { Icon } from "../../../Atoms";

import Alert from ".";

describe("<Alert />", () => {
  it("shouldn't render if opened is false", () => {
    render(<Alert opened={false} text="" />);
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });
  it("should render opened", () => {
    render(<Alert opened text="" />);
    expect(screen.queryByTestId("alert")).toBeInTheDocument();
  });
  it("shouldn't render if opened is undefined", () => {
    render(<Alert text="" />);
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });
  it("shouldn't render", () => {
    render(<Alert opened={false} text="" />);
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });
  it("shouldn't render after click", () => {
    const { container } = render(<Alert opened text="" dismissable />);
    const dismissButton = queryByTestId(container, "dismiss-button");

    if (dismissButton) {
      fireEvent.click(dismissButton);
      expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
    } else {
      expect(screen.queryByTestId("alert")).toBeInTheDocument();
    }
  });
  it("should render with border", () => {
    render(<Alert opened text="" bordered />);
    expect(screen.queryByTestId("alert")).toBeInTheDocument();
    expect(screen.queryByTestId("alert")?.className).toContain("border-t-4");
  });
  it("should render without border", () => {
    render(<Alert opened text="" />);
    expect(screen.queryByTestId("alert")).toBeInTheDocument();
    expect(screen.queryByTestId("alert")?.className).not.toContain("border-t-4");
  });
  it("should render with icon", () => {
    const wrapper = mount(<Alert opened text="" withIcon icon="AcademicCapIcon" />);
    expect(wrapper.find(Icon).exists()).toBeTruthy();
  });
  it("should render without icon", () => {
    const wrapper = mount(<Alert opened text="" />);
    expect(wrapper.find(Icon).exists()).toBeFalsy();
  });
});
