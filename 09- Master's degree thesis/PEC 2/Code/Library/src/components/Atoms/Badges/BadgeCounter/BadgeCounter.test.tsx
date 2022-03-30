/**
 * ?BadgeCounter Test
 */

import { mount } from "enzyme";

import BadgeCounter from ".";

describe("<BadgeCounter />", () => {
  it("should not render", () => {
    const wrapper = mount(<BadgeCounter />);
    expect(wrapper.find("span").length).toBe(0);
  });
  it("should render", () => {
    const wrapper = mount(<BadgeCounter counter={1} />);
    expect(wrapper.find("span").length).toBe(1);
  });
  it("should render +99", () => {
    const wrapper = mount(<BadgeCounter counter={100} />);
    expect(wrapper.find("span").text()).toBe("99");
  });
});
