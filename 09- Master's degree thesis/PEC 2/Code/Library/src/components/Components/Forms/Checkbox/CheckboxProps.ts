import { ReactElement } from "react";
import { RegisterOptions } from "react-hook-form";

type CheckboxProps = {
  label: string;
  link?: ReactElement;
  name: string;
  options?: RegisterOptions;
  register?: any;
};

export default CheckboxProps;