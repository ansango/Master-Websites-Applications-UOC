import { ReactNode } from "react";
import { SubmitHandler } from "react-hook-form";

type FormProps = {
  defaultValues?: any;
  onSubmit: SubmitHandler<any>;
  children: ReactNode;
  className?: string;
};

export default FormProps;
