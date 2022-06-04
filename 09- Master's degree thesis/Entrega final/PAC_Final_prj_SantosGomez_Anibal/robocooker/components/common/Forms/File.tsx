import { FC, ReactNode } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import Error from "./Error";


type Props = {
  name: string;
  options?: RegisterOptions;
  register?: any;
};

const File: FC<Props> = ({ name, options, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <input
        type="file"
        className="file:mr-4 file:btn file:normal-case text-sm file:btn-primary file:btn-link file:p-0 file:line w-full"
        {...register(name, { ...options })}
        {...rest}
      />
      <Error errors={errors} name={name} {...rest} />
    </>
  );
};

export default File;
