/**
 * ?IconSimple Test
 */

import { render } from "@testing-library/react";
import { mount } from "enzyme";
import IconSimple from ".";

describe("<IconSimple />", () => {
  it("should render", () => {
    const wrapper = mount(<IconSimple icon="Abbrobotstudio" />);
    expect(wrapper.props().icon).toBe("Abbrobotstudio");
    expect(wrapper.find("svg").length).toBe(1);
  });
  it("should render by default", () => {
    const { container } = render(<IconSimple icon="Abbrobotstudio" />);
    expect(container.firstChild).toHaveClass("h-8 w-8");
  });
  it("should render with custom class", () => {
    const { container } = render(<IconSimple icon="Abbrobotstudio" classIcon="text-red-800" />);
    expect(container.firstChild).toHaveClass("text-red-800");
  });
  it("should render with small size", () => {
    const { container } = render(<IconSimple icon="Abbrobotstudio" size="small" />);
    expect(container.firstChild).toHaveClass("h-6 w-6");
  });
});
