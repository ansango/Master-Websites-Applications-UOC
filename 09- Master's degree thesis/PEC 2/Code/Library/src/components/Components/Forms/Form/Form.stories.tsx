/**
 * ?Form Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input, Date, File, Checkbox, RadioGroup, Select, Switch, TextArea } from "../";
import Form from ".";
import { Button } from "../../Buttons";

export default {
  title: "Components/Forms/Form",
  component: Form,
  parameters: {
    layout: "",
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {
  onSubmit: (data: any) => console.log(data),
  children: (
    <div className="p-10">
      <Input type="text" label="Name" name="name1" />
      <Input type="tel" label="Phone" name="phone1" />
      <Input type="email" label="Email" name="email1" />
      <Input type="password" label="Password" name="password1" />
      <Date type="date" label="Birthday" name="birthday1" />
      <File label="Avatar" name="avatar1" />
      <Select
        label="Select"
        name="select1"
        data={[
          { value: "option__one", label: "Option One" },
          { value: "option__two", label: "Option Two" },
          { value: "option__three", label: "Option Three" },
        ]}
      />

      <RadioGroup
        label="Radio"
        name="countries1"
        data={[
          { lab: "United States", value: "USA" },
          { lab: "Canada", value: "Canada" },
          { lab: "Mexico", value: "Mexico" },
        ]}
      />

      <Switch label="Switch" name="switch1" />
      <TextArea label="Message" name="message1" />
      <Checkbox name="conditions1" label="I agree to the terms and conditions" />
      <Button label="Send" type="submit"/>
    </div>
  ),
};

export const B_Validation = Template.bind({});

B_Validation.args = {
  onSubmit: (data: any) => console.log(data),
  children: (
    <div className="p-10">
      <Input
        type="text"
        label="Name"
        name="name2"
        options={{ required: { value: true, message: "Field required!" } }}
      />
      <Input
        type="tel"
        label="Phone"
        name="phone2"
        options={{
          pattern: {
            value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
            message: "Only international phones!",
          },
          required: { value: true, message: "Field required!" },
        }}
      />
      <Date
        type="date"
        label="Birthday"
        name="birthday2"
        options={{ required: { value: true, message: "Your age is required!" } }}
      />
      <File
        label="Avatar"
        name="avatar2"
        options={{ required: { value: true, message: "A photo is required!" } }}
      />

      <Select
        label="Select"
        name="select2"
        data={[
          { value: "option__one", label: "Option One" },
          { value: "option__two", label: "Option Two" },
          { value: "option__three", label: "Option Three" },
        ]}
        options={{ required: { value: true, message: "Choose an option!" } }}
      />
      <RadioGroup
        label="Radio"
        name="countries2"
        data={[
          { lab: "United States", value: "USA" },
          { lab: "Canada", value: "Canada" },
          { lab: "Mexico", value: "Mexico" },
        ]}
        options={{ required: { value: true, message: "Choose an option!" } }}
      />
      <Switch label="Switch" name="switch2" />
      <TextArea
        label="Message"
        name="message2"
        rows={7}
        options={{ required: { value: true, message: "Type a something!" } }}
      />
      <Checkbox
        name="conditions2"
        label="I agree to the terms and conditions"
        options={{ required: { value: true, message: "" } }}
      />
      <Button label="Send" type="submit" />
    </div>
  ),
};
