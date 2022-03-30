/**
 * ?Checkbox Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form } from "..";
import Checkbox from ".";

export default {
  title: "Components/Forms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Form onSubmit={(data: any) => console.log(data)}>
    <Checkbox {...args} />
  </Form>
);

export const A_Default = Template.bind({});

A_Default.args = {
  name: "conditions",
  label: "I agree to the terms and conditions",
};

export const B_WithLink = Template.bind({});

B_WithLink.args = {
  name: "conditions",
  label: "I agree to the",
  link: (
    <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
      terms and conditions
    </a>
  ),
};
