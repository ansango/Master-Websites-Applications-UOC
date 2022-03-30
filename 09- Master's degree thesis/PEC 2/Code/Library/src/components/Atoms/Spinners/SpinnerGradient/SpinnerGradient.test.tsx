/**
 * ?SpinnerGradient Test
 */

import { mount } from "enzyme";

import SpinnerGradient from ".";

describe("<SpinnerGradient />", () => {
  it("should render monochrome", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="blue" size="base" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("base");
  });
  it("should render duotone", () => {
    const wrapper = mount(<SpinnerGradient kind="duotone" style="blue" size="base" />);
    expect(wrapper.props().kind).toBe("duotone");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("base");
  });
  it("should render monochrome with size small", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="blue" size="small" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("small");
  });
  it("should render monochrome with size large", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="blue" size="large" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("large");
  });
  it("should render monochrome with size xlarge", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="blue" size="xlarge" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("xlarge");
  });
  it("should render monochrome with size xsmall", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="blue" size="xsmall" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("xsmall");
  });
  it("should render duotone with size small", () => {
    const wrapper = mount(<SpinnerGradient kind="duotone" style="blue" size="small" />);
    expect(wrapper.props().kind).toBe("duotone");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("small");
  });
  it("should render duotone with size large", () => {
    const wrapper = mount(<SpinnerGradient kind="duotone" style="blue" size="large" />);
    expect(wrapper.props().kind).toBe("duotone");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("large");
  });
  it("should render duotone with size xlarge", () => {
    const wrapper = mount(<SpinnerGradient kind="duotone" style="blue" size="xlarge" />);
    expect(wrapper.props().kind).toBe("duotone");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("xlarge");
  });
  it("should render duotone with size xsmall", () => {
    const wrapper = mount(<SpinnerGradient kind="duotone" style="blue" size="xsmall" />);
    expect(wrapper.props().kind).toBe("duotone");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("xsmall");
  });
  it("should render monochrome with style green", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="green" size="base" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("green");
    expect(wrapper.props().size).toBe("base");
  });
  it("should render monochrome with style red", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="red" size="base" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("red");
    expect(wrapper.props().size).toBe("base");
  });
  it("should render monochrome with style blue", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="blue" size="base" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("blue");
    expect(wrapper.props().size).toBe("base");
  });
  it("should render monochrome with style purple", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="purple" size="base" />);
    expect(wrapper.props().kind).toBe("monochrome");
    expect(wrapper.props().style).toBe("purple");
    expect(wrapper.props().size).toBe("base");
  });
  it("should render duotone with style green", () => {
    const wrapper = mount(<SpinnerGradient kind="duotone" style="green" size="base" />);
    expect(wrapper.props().kind).toBe("duotone");
    expect(wrapper.props().style).toBe("green");
    expect(wrapper.props().size).toBe("base");
  });
  it("should render duotone with style red", () => {
    const wrapper = mount(<SpinnerGradient kind="duotone" style="red" size="base" />);
    expect(wrapper.props().kind).toBe("duotone");
    expect(wrapper.props().style).toBe("red");
    expect(wrapper.props().size).toBe("base");
  });

  it("should render duotone with style purple", () => {
    const wrapper = mount(<SpinnerGradient kind="duotone" style="purple" size="base" />);
    expect(wrapper.props().kind).toBe("duotone");
    expect(wrapper.props().style).toBe("purple");
    expect(wrapper.props().size).toBe("base");
  });
  it("should render kind undefined", () => {
    const wrapper = mount(<SpinnerGradient style="blue" size="base" />);
    expect(wrapper.find("svg").props().className).toBe(
      "inline animate-spin text-blue-800 dark:text-gray-600 fill-blue-400 w-8 h-8"
    );
  });
  it("should render style undefined", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" size="base" />);
    expect(wrapper.find("svg").props().className).toBe(
      "inline animate-spin text-blue-800 dark:text-gray-600 fill-blue-400 w-8 h-8"
    );
  });
  it("should render size undefined", () => {
    const wrapper = mount(<SpinnerGradient kind="monochrome" style="blue" />);
    expect(wrapper.find("svg").props().className).toBe(
      "inline animate-spin text-blue-800 dark:text-gray-600 fill-blue-400 w-8 h-8"
    );
  });
});
