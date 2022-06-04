import { FC } from "react";
import { FieldErrors } from "react-hook-form";

type Props = {
  errors: FieldErrors<Record<string, any>>;
  name: string;
};

const Error: FC<Props> = ({ errors, name }) => {
  return (
    <>
      {errors[name] && (
        <p className="label label-text text-red-600">
          {errors[name].message}
        </p>
      )}
    </>
  );
};

export default Error;
