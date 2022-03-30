import { RegisterOptions } from "react-hook-form";

type DateProps = {
  type: "date" | "month" | "week" | "time" | "datetime-local";
  label?: string;
  name: string;
  options?: RegisterOptions;
  register?: any;
};

export default DateProps;
