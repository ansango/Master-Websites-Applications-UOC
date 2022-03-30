/**
 * ?Badge Test
 */

import { mount } from "enzyme";
import { Icon } from "../../Icons";
import Badge from ".";

describe("<Badge />", () => {
  it("should render", () => {
    const wrapper = mount(<Badge label="Badge" />);
    expect(wrapper.find("span").length).toBe(1);
  });
  it("should render with link", () => {
    const wrapper = mount(<Badge label="Badge" link />);
    expect(wrapper.find("span").props().className).toContain("cursor-pointer");
  });
  it("should render with icon", () => {
    const wrapper = mount(<Badge label="Badge" icon="ArrowLeftIcon" kind="withIcon" />);
    expect(wrapper.find(Icon).length).toBe(1);
    expect(wrapper.find("span").text()).toBe("Badge");
  });
  it("should render with icon only", () => {
    const wrapper = mount(<Badge label="Badge" icon="ArrowLeftIcon" kind="iconOnly" />);
    expect(wrapper.find(Icon).length).toBe(1);
    expect(wrapper.find("span").text()).toBe("");
  });
});
