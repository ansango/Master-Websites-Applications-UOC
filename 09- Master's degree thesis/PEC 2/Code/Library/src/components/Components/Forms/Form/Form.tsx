/**
 * ?Form Component
 */

import { FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormProps } from ".";
// import * as cn from "./FormStyles";

/**
 * Description of Form component displayed in Storybook
 */

const Form: FC<FormProps> = ({ defaultValues, children, onSubmit, className }) => {
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
