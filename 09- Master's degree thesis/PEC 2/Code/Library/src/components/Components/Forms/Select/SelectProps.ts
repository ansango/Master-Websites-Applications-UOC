import { RegisterOptions } from "react-hook-form";

type SelectProps = {
  label?: string;
  name: string;
  data: {
    label: string;
    value?: string;
    disabled?: boolean;
  }[];
  options?: RegisterOptions;
  register?: any;
};

export default SelectProps;
