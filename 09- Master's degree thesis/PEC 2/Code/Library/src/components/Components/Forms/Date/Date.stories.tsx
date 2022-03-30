/**
 * ?Date Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Form } from "..";
import Date from ".";

export default {
  title: "Components/Forms/Date",
  component: Date,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Date>;

const Template: ComponentStory<typeof Date> = (args) => (
  <Form onSubmit={(data: any) => console.log(data)}>
    <Date {...args} />
  </Form>
);

export const A_default = Template.bind({});

A_default.args = {
  name: "birthday",
  label: "Birthday",
  type: "date",
};

export const B_Month = Template.bind({});

B_Month.args = {
  name: "availability",
  label: "Availability",
  type: "month",
};

export const C_Week = Template.bind({});

C_Week.args = {
  name: "availability",
  label: "Availability",
  type: "week",
};

export const D_Time = Template.bind({});

D_Time.args = {
  name: "availability",
  label: "Availability",
  type: "time",
};

export const E_DateTimeLocal = Template.bind({});

E_DateTimeLocal.args = {
  name: "availability",
  label: "Availability",
  type: "datetime-local",
};
