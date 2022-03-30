/**
 * ?BadgeCounterGradient Test
 */

import { mount } from "enzyme";

import BadgeCounterGradient from ".";

describe("<BadgeCounterGradient />", () => {
  it("should not render", () => {
    const wrapper = mount(<BadgeCounterGradient />);
    expect(wrapper.find("span").length).toBe(0);
  });
  it("should render", () => {
    const wrapper = mount(<BadgeCounterGradient counter={1} />);
    expect(wrapper.find("span").length).toBe(1);
  });
  it("should render +99", () => {
    const wrapper = mount(<BadgeCounterGradient counter={100} />);
    expect(wrapper.find("span").text()).toBe("99");
  });
  it("should render monochrome", () => {
    const wrapper = mount(<BadgeCounterGradient counter={1} kind="monochrome" />);
    expect(wrapper.find(BadgeCounterGradient).props().kind).toBe("monochrome");
  });
  it("should render duotone", () => {
    const wrapper = mount(<BadgeCounterGradient counter={1} kind="duotone" />);
    expect(wrapper.find(BadgeCounterGradient).props().kind).toBe("duotone");
  });
});
