import { render, screen } from "@testing-library/react";
import Button from ".";
import { mount } from "enzyme";
import { Spinner, Icon } from "../../../Atoms";

describe("Button Component", () => {
  it("should render", () => {
    render(<Button label="Test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
  it("should render with custom class", () => {
    const wrapper = mount(
      <Button label="Test" classButton="bg-red-500 px-4 py-2 rounded text-white" />
    );
    expect(wrapper.props().classButton).toBe("bg-red-500 px-4 py-2 rounded text-white");
  });
  it("should render outline", () => {
    const wrapper = mount(<Button label="Test" kind="outline" />);
    expect(wrapper.props().kind).toBe("outline");
  });
  it("should render disabled", () => {
    const wrapper = mount(<Button label="Test" disabled />);
    expect(wrapper.props().disabled).toBe(true);
  });
  it("should render loading with loader small", () => {
    const wrapper = mount(<Button label="Test" loading size="xsmall" />);
    expect(wrapper.props().loading).toBe(true);
    expect(wrapper.find(Spinner)).toHaveLength(1);
    expect(wrapper.find(Spinner).props().size).toBe("xsmall");
  });
  it("should render loading with loader xsmall", () => {
    const wrapper = mount(<Button label="Test" loading size="small" />);
    expect(wrapper.props().loading).toBe(true);
    expect(wrapper.find(Spinner)).toHaveLength(1);
    expect(wrapper.find(Spinner).props().size).toBe("xsmall");
  });
  it("should render loading with loader large", () => {
    const wrapper = mount(<Button label="Test" loading />);
    expect(wrapper.props().loading).toBe(true);
    expect(wrapper.find(Spinner)).toHaveLength(1);
    expect(wrapper.find(Spinner).props().size).toBe("small");
  });
  it("should render icon", () => {
    const wrapper = mount(<Button label="Test" icon="ArchiveIcon" />);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).props().icon).toBe("ArchiveIcon");
  });
  it("should render with fullWidth", () => {
    const wrapper = mount(<Button label="Test" fullWidth />);
    expect(wrapper.props().fullWidth).toBe(true);
  });
});
