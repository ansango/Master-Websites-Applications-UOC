/**
 * ?File Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form } from "..";
import File from ".";

export default {
  title: "Components/Forms/File",
  component: File,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof File>;

const Template: ComponentStory<typeof File> = (args) => (
  <Form onSubmit={(data: any) => console.log(data)}>
    <File {...args} />
  </Form>
);

export const A_Default = Template.bind({});

A_Default.args = {
  name: "file",
  label: "Upload file",
};
