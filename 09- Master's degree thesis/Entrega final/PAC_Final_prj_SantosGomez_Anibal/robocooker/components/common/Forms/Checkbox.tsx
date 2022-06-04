import { FC, useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

enum inputSize {
  xs = "checkbox-xs",
  sm = "checkbox-sm",
  md = "checkbox-md",
  lg = "checkbox-lg",
}

enum inputKind {
  default = "",
  primary = "checkbox-primary",
  secondary = "checkbox-secondary",
  accent = "checkbox-accent",
}

type Props = {
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "accent";
  label?: string;
  name: string;
  placeholder?: string;
  options?: RegisterOptions;
  register?: any;
  checked?: boolean;
};

const Checkbox: FC<Props> = ({
  label,
  name,
  options,
  kind = "default",
  size = "md",
  checked = false,
  ...rest
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const [isChecked, setChecked] = useState(checked);

  return (
    <div className="form-control w-full">
      {label ? (
        <label
          htmlFor={name}
          className={!errors[name] ? "label" : "label text-red-600"}
        >
          <span
            className={!errors[name] ? "label-text" : "label-text text-red-600"}
          >
            {label}
          </span>
          <input
            type="checkbox"
            className={
              !errors[name]
                ? `checkbox ${inputSize[size]} ${inputKind[kind]}`
                : `checkbox ${inputSize[size]} input-error`
            }
            {...register(name, { ...options })}
            {...rest}
            checked={isChecked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
          />
        </label>
      ) : (
        <input
          type="checkbox"
          className={
            !errors[name]
              ? `checkbox ${inputSize[size]} ${inputKind[kind]}`
              : `checkbox ${inputSize[size]} input-error`
          }
          {...register(name, { ...options })}
          {...rest}
          checked={isChecked}
          onChange={(e) => {
            setChecked(e.target.checked);
          }}
        />
      )}
    </div>
  );
};

export default Checkbox;
