/**
 * ?AlertContent Test
 */
import { render, fireEvent, queryByTestId, screen } from "@testing-library/react";
import { mount } from "enzyme";

import AlertContent from ".";

describe("<AlertContent />", () => {
  it("should render", () => {
    const wrapper = mount(
      <AlertContent title="Title Test" opened content="Test Content" icon="ArchiveIcon" />
    );
    expect(wrapper.find("div").length).toBe(4);
  });
  it("shouldn't render if opened is false", () => {
    render(<AlertContent opened={false} title="" dismissable content="" icon="AcademicCapIcon" />);
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });
  it("should render opened", () => {
    render(<AlertContent opened title="" dismissable content="" icon="AcademicCapIcon" />);
    expect(screen.queryByTestId("alert")).toBeInTheDocument();
  });
  it("shouldn't render if opened is undefined", () => {
    render(<AlertContent title="" dismissable content="" icon="AcademicCapIcon" />);
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });
  it("shouldn't render", () => {
    render(<AlertContent opened={false} title="" dismissable content="" icon="AcademicCapIcon" />);
    expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
  });
  it("shouldn't render after click", () => {
    const { container } = render(
      <AlertContent opened title="" dismissable content="" icon="AcademicCapIcon" />
    );
    const dismissButton = queryByTestId(container, "dismiss-button");

    if (dismissButton) {
      fireEvent.click(dismissButton);
      expect(screen.queryByTestId("alert")).not.toBeInTheDocument();
    } else {
      expect(screen.queryByTestId("alert")).toBeInTheDocument();
    }
  });
});
