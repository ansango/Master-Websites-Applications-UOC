/**
 * ?File Component
 */

import { FC } from "react";
// import * as cn from "./FileStyles";
import { useFormContext } from "react-hook-form";
import { FileProps } from ".";

/**
 * Description of File component displayed in Storybook
 */

const File: FC<FileProps> = ({ label, name, options, ...rest }) => {
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

      <input
        aria-describedby={name}
        type="file"
        className={
          !errors[name]
            ? "file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg file:text-sm file:text-white file:bg-gray-700 file:hover:bg-gray-600 file:font-medium file:cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            : "file:mr-4 file:py-2.5 file:px-4 file:border-0 file:bg file:text-sm file:text-white file:bg-red-700 file:hover:bg-red-600 file:font-medium file:cursor-pointer bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 block w-full dark:bg-red-100 dark:border-red-400"
        }
        {...register(name, { ...options })}
        {...rest}
      />
      {errors[name] && (
        <p className="mt-2 text-sm text-red-600 dark:text-red-500">{errors[name].message}</p>
      )}
    </div>
  );
};

export default File;
