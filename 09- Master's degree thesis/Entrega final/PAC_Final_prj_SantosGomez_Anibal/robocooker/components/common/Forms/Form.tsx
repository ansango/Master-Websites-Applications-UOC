import { FC, ReactNode } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";

type Props = {
  defaultValues?: any;
  onSubmit: SubmitHandler<any>;
  className?: string;
  children: ReactNode;
};

const Form: FC<Props> = ({ defaultValues, children, onSubmit, className }) => {
  const methods = useForm({ defaultValues });
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={className}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Form;
