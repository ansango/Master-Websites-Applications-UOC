/**
 * ?TextArea Component
 */

import { FC } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Error from "./Error";
import Label from "./Label";

type Props = {
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "info" | "accent" | "warning";
  rows?: number;
  label?: string;
  name: string;
  placeholder?: string;
  options?: RegisterOptions;
  register?: any;
};

enum inputSize {
  xs = "h-18",
  sm = "h-20",
  md = "h-24",
  lg = "h-28",
}

enum inputKind {
  default = "",
  primary = "textarea-primary",
  secondary = "textarea-secondary",
  accent = "textarea-accent",
  info = "textarea-info",
  warning = "textarea-warning",
  error = "textarea-error",
}

const TextArea: FC<Props> = ({
  label,
  name,
  options,
  rows,
  kind = "default",
  size = "md",
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="form-control w-full">
      {label && <Label name={name} label={label} errors={errors} />}
      <textarea
        id={name}
        rows={rows}
        className={
          !errors[name]
            ? `textarea textarea-bordered w-full ${inputSize[size]} ${inputKind[kind]}`
            : `textarea textarea-bordered w-full ${inputSize[size]} textarea-error`
        }
        {...register(name, { ...options })}
        {...rest}
      />
      <Error errors={errors} name={name} {...rest} />
    </div>
  );
};

export default TextArea;
