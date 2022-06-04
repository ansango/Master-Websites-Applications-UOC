import { FC } from "react";
import { useFormContext, type RegisterOptions } from "react-hook-form";
import * as HeroIcons from "@heroicons/react/solid";
import * as HeroIconsOutline from "@heroicons/react/outline";
import * as SimpleIcons from "@icons-pack/react-simple-icons";
import { Icon, IconSimple } from "../Icons";
import Error from "./Error";
import Label from "./Label";

type InputProps = {
  size?: "xs" | "sm" | "md" | "lg";
  kind?: "default" | "primary" | "secondary" | "info" | "accent" | "warning";
  type: "text" | "number" | "email" | "password" | "search" | "tel";
  label?: string;
  name: string;
  placeholder?: string;
  options?: RegisterOptions;
  register?: any;
};

type Props = {
  icon?: {
    name: keyof typeof HeroIcons | keyof typeof HeroIconsOutline;
    kind: "solid" | "outline";
  };
  iconSimple?: {
    name: keyof typeof SimpleIcons;
  };
} & InputProps;

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

const Input: FC<Props> = ({
  icon,
  iconSimple,
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
        {!icon && !iconSimple && (
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
        )}
        {icon && (
          <>
            {label && <Label name={name} label={label} errors={errors} />}
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <Icon
                  icon={icon.name}
                  kind={icon.kind}
                  className="w-5 h-5 text-gray-500"
                />
              </div>
              <input
                type={type}
                className={
                  !errors[name]
                    ? `pl-10 input w-full input-bordered ${inputSize[size]} ${inputKind[kind]}`
                    : `pl-10 input w-full input-bordered ${inputSize[size]} input-error`
                }
                {...register(name, { ...options })}
                {...rest}
              />
            </div>
            <Error errors={errors} name={name} {...rest} />
          </>
        )}
        {iconSimple && (
          <>
            {label && <Label name={name} label={label} errors={errors} />}
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <IconSimple
                  icon={iconSimple.name}
                  className="w-5 h-5 text-gray-500"
                />
              </div>
              <input
                type={type}
                className={
                  !errors[name]
                    ? `pl-10 input w-full input-bordered ${inputSize[size]} ${inputKind[kind]}`
                    : `pl-10 input w-full input-bordered ${inputSize[size]} input-error`
                }
                {...register(name, { ...options })}
                {...rest}
              />
            </div>
            <Error errors={errors} name={name} {...rest} />
          </>
        )}
      </>
    </div>
  );
};

export default Input;
