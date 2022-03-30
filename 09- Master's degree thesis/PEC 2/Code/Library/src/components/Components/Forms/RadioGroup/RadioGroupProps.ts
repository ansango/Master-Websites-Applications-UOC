import { RegisterOptions } from "react-hook-form";

type RadioGroupProps = {
  label?: string;
  name: string;
  data: {
    lab: string;
    value: string;
  }[];
  options?: RegisterOptions;
};


export default RadioGroupProps;