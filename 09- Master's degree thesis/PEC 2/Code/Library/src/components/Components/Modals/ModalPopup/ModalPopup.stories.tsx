/**
 * ?ModalPopup Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../../Buttons";
import ModalPopup from ".";

export default {
  title: "Components/Modals/Modal Popup",
  component: ModalPopup,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    opened: { control: false },
    element: { control: false },
  },
} as ComponentMeta<typeof ModalPopup>;

const Template: ComponentStory<typeof ModalPopup> = (args) => <ModalPopup {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  opened: false,
  element: <Button label="Test" />,
};