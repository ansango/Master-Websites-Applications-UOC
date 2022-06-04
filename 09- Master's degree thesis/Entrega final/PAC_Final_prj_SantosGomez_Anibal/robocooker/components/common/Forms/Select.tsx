import { FC } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Error from "./Error";
import Label from "./Label";

type Props = {
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "info" | "accent" | "warning";
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

enum inputSize {
  xs = "select-xs",
  sm = "select-sm",
  md = "select-md",
  lg = "select-lg",
}

enum inputKind {
  default = "",
  primary = "select-primary",
  secondary = "select-secondary",
  accent = "select-accent",
  info = "select-info",
  warning = "select-warning",
}

const Select: FC<Props> = ({
  label,
  name,
  data,
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
      {label && <Label name={name} label={label} errors={errors} />}
      <select
        className={
          !errors[name]
            ? `select select-bordered ${inputSize[size]} ${inputKind[kind]}`
            : `select select-bordered ${inputSize[size]} select-error`
        }
        {...register(name, { ...options })}
        {...rest}
      >
        {data.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      <Error errors={errors} name={name} {...rest} />
    </div>
  );
};

export default Select;
