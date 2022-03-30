import { RegisterOptions } from "react-hook-form";

export type InputProps = {
  type: "text" | "number" | "email" | "password" | "search" | "tel";
  label?: string;
  name: string;
  options?: RegisterOptions;
  register?: any;
};

export default InputProps;
