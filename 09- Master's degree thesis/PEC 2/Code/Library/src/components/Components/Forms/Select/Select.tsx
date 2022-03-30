/**
 * ?Select Component
 */

import { FC } from "react";
// import * as cn from "./SelectStyles";
import { useFormContext } from "react-hook-form";
import { SelectProps } from ".";

/**
 * Description of Select component displayed in Storybook
 */

const Select: FC<SelectProps> = ({ label, name, data, options, ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="mb-3">
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
      <select
        className={
          !errors[name]
            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            : "bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
        }
        {...register(name, { ...options })}
        {...rest}
      >
        {data.map((option, index) => (
          <option key={index} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

export default Select;
