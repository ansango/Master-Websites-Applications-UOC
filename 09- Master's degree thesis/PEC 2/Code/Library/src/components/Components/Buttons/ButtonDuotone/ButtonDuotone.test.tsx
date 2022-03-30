/**
 * ?ButtonDuotone Test
 */

import { mount } from "enzyme";

import ButtonDuotone from ".";

describe("<ButtonDuotone />", () => {
  it("should render", () => {
    const wrapper = mount(
      <ButtonDuotone
        label="Test"
        size="base"
        style="purple"
        icon="AcademicCapIcon"
        loading={false}
      />
    );
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().size).toBe("base");
    expect(wrapper.props().style).toBe("purple");
    expect(wrapper.props().icon).toBe("AcademicCapIcon");
    expect(wrapper.find("span").props().className).toBe("mr-2.5");
  });
  it("should render no default options", () => {
    const wrapper = mount(<ButtonDuotone label="Test" size="large" style="lime" />);
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().size).toBe("large");
    expect(wrapper.props().style).toBe("lime");
    expect(wrapper.find("span").props().className).toBe("");
  });
  it("should render size small", () => {
    const wrapper = mount(<ButtonDuotone label="Test" size="small" style="blue" />);
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().size).toBe("small");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.find("span").props().className).toBe("");
  });
  it("should render size large", () => {
    const wrapper = mount(<ButtonDuotone label="Test" size="large" style="cyan" />);
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().size).toBe("large");
    expect(wrapper.props().style).toBe("cyan");
    expect(wrapper.find("span").props().className).toBe("");
  });
  it("should render size xlarge", () => {
    const wrapper = mount(<ButtonDuotone label="Test" size="xlarge" style="red" />);
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().size).toBe("xlarge");
    expect(wrapper.props().style).toBe("red");
    expect(wrapper.find("span").props().className).toBe("");
  });
  it("should render size xsmall", () => {
    const wrapper = mount(<ButtonDuotone label="Test" size="xsmall" style="pink" />);
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().size).toBe("xsmall");
    expect(wrapper.props().style).toBe("pink");
    expect(wrapper.find("span").props().className).toBe("");
  });
  it("should render customClass", () => {
    const wrapper = mount(<ButtonDuotone label="Test" classButton="customClass" />);
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().classButton).toBe("customClass");
  });
  it("should render disabled", () => {
    const wrapper = mount(<ButtonDuotone label="Test" disabled={true} />);
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().disabled).toBe(true);
  });
  it("should render loading", () => {
    const wrapper = mount(<ButtonDuotone label="Test" loading={true} />);
    expect(wrapper.props().label).toBe("Test");
    expect(wrapper.props().loading).toBe(true);
  });
});
