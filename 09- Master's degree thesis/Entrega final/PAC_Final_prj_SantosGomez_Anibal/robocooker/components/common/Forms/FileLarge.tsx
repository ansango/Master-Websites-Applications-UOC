import { FC, ReactNode } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Error from "./Error";
import Label from "./Label";

type Props = {
  name: string;
  options?: RegisterOptions;
  register?: any;
  label?: string;
};

const FileLarge: FC<Props> = ({ name, options, label, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="form-control w-full">
      {label && <Label name={name} label={label} errors={errors} />}
      <input
        type="file"
        className="file:mr-4 file:btn file:normal-case text-sm file:btn-primary file:px-4 file:p-0 file:line w-full input input-bordered px-0 focus:outline-none"
        {...register(name, { ...options })}
        {...rest}
      />
      <Error errors={errors} name={name} {...rest} />
    </div>
  );
};

export default FileLarge;
