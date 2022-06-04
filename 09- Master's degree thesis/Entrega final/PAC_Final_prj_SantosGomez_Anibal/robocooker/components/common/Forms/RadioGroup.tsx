import { FC } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Error from "./Error";

type Props = {
  label?: string;
  name: string;
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "accent";
  data: {
    lab: string;
    value: string;
  }[];
  options?: RegisterOptions;
};

enum inputSize {
  xs = "radio-xs",
  sm = "radio-sm",
  md = "radio-md",
  lg = "radio-lg",
}

enum inputKind {
  default = "",
  primary = "radio-primary",
  secondary = "radio-secondary",
  accent = "radio-accent",
}

const RadioGroup: FC<Props> = ({
  label,
  name,
  data,
  options,
  kind = "default",
  size = "md",
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <fieldset id={name} className="form-control w-full">
      {label && (
        <label htmlFor={name} className="label cursor-pointer">
          <span
            className={
              !errors[name] ? "label-text" : "label-text  text-red-600"
            }
          >
            {label}
          </span>
        </label>
      )}
      {data.map(({ value, lab }, index) => (
        <div className="form-control" key={index}>
          <label htmlFor={value} className="label cursor-pointer">
            <span
              className={
                !errors[name] ? "label-text" : "label-text  text-red-600"
              }
            >
              {lab}
            </span>
            <input
              type="radio"
              value={value}
              className={
                !errors[name]
                  ? `radio ${inputSize[size]} ${inputKind[kind]}`
                  : `radio ${inputSize[size]} checked:bg-red-600 border-red-600`
              }
              {...register(name, { ...options })}
              {...rest}
            />
          </label>
        </div>
      ))}
      <Error errors={errors} name={name} {...rest} />
    </fieldset>
  );
};

export default RadioGroup;
