import { FC, useState } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";

type Props = {
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "accent";
  label?: string;
  name: string;
  options?: RegisterOptions;
  register?: any;
};

enum inputSize {
  xs = "toggle-xs",
  sm = "toggle-sm",
  md = "toggle-md",
  lg = "toggle-lg",
}

enum inputKind {
  default = "",
  primary = "toggle-primary",
  secondary = "toggle-secondary",
  accent = "toggle-accent",
}

const Switch: FC<Props> = ({
  label,
  name,
  options,
  size = "md",
  kind = "default",
  ...rest
}) => {
  const { register } = useFormContext();
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="form-control w-full">
      <label className="label cursor-pointer">
        <span className="label-text">Remember me</span>
        <input
          type="checkbox"
          className={`toggle ${inputSize[size]} ${inputKind[kind]}`}
          checked={isActive}
          onClick={() => setIsActive(!isActive)}
          {...register(name, { ...options })}
          {...rest}
        />
      </label>
    </div>
  );
};

export default Switch;
