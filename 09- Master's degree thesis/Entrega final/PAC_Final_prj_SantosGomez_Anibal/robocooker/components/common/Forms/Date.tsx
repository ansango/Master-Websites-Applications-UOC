import { FC } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Error from "./Error";
import Label from "./Label";

type Props = {
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "info" | "accent" | "warning";
  type: "date" | "month" | "week" | "time" | "datetime-local";
  label?: string;
  name: string;
  placeholder?: string;
  options?: RegisterOptions;
  register?: any;
};

enum inputSize {
  xs = "input-xs",
  sm = "input-sm",
  md = "input-md",
  lg = "input-lg",
}

enum inputKind {
  default = "",
  primary = "input-primary",
  secondary = "input-secondary",
  accent = "input-accent",
  info = "input-info",
  warning = "input-warning",
  error = "input-error",
}

const Date: FC<Props> = ({
  name,
  label,
  type,
  options,
  size = "md",
  kind = "default",
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="form-control w-full">
      <>
        {label && <Label name={name} label={label} errors={errors} />}
        <input
          type={type}
          className={
            !errors[name]
              ? `input w-full input-bordered ${inputSize[size]} ${inputKind[kind]}`
              : `input w-full input-bordered ${inputSize[size]} input-error`
          }
          {...register(name, { ...options })}
          {...rest}
        />
        <Error errors={errors} name={name} {...rest} />
      </>
    </div>
  );
};

export default Date;
