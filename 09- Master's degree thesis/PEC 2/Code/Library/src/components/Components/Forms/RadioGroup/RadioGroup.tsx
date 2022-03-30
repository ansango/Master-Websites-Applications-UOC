/**
 * ?Radio Component
 */

import { FC } from "react";
// import * as cn from "./RadioStyles";
import { useFormContext } from "react-hook-form";
import RadioPropsGroup from "./RadioGroupProps";

/**
 * Description of Radio component displayed in Storybook
 */

const RadioGroup: FC<RadioPropsGroup> = ({ label, name, data, options, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <fieldset id={name} className="mb-3">
      {label && (
        <label
          htmlFor={name}
          className={
            !errors[name]
              ? "block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              : "block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
          }
        >
          {label}
        </label>
      )}
      {data.map(({ value, lab }, index) => (
        <div className="flex items-center mb-4" key={index}>
          <input
            type="radio"
            value={value}
            className={
              !errors[name]
                ? "w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                : "w-4 h-4 border-red-300 focus:ring-2 focus:ring-red-300 dark:focus:ring-red-600 dark:focus:bg-red-600 dark:bg-gray-700 dark:border-gray-600"
            }
            {...register(name, { ...options })}
            {...rest}
          />
          <label
            htmlFor={value}
            className={
              !errors[name]
                ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                : "ml-2 text-sm font-medium text-red-700 dark:text-red-500"
            }
          >
            {lab}
          </label>
        </div>
      ))}
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors[name].message}</p>
      )}
    </fieldset>
  );
};

export default RadioGroup;
