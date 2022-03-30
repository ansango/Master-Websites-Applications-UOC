/**
 * ?Spinner Story
 */

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Spinner from ".";

export default {
  title: "Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    classSpinner: { control: false },
  },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const A_Default = Template.bind({});

A_Default.args = {};

export const B_Solid_Spinner = Template.bind({});

B_Solid_Spinner.args = {
  kind: "solid",
};

export const C_Style_Spinner = Template.bind({});

C_Style_Spinner.args = {
  style: "green",
};

export const D_Size_Spinner = Template.bind({});

D_Size_Spinner.args = {
  size: "xlarge",
  kind: "solid",
  style: "yellow",
};

export const E_Custom_Spinner = Template.bind({});

E_Custom_Spinner.args = {
  classSpinner: "inline h-10 w-10 mr-2 text-purple-300 animate-spin fill-purple-800",
};
