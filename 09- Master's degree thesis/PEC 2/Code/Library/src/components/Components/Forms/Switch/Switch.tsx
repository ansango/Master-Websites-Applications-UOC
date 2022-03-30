/**
 * ?Switch Component
 */

import { FC, useState } from "react";
// import * as cn from "./SwitchStyles";
import { useFormContext } from "react-hook-form";
import { SwitchProps } from ".";

/**
 * Description of Switch component displayed in Storybook
 */

const Switch: FC<SwitchProps> = ({ label, name, options, ...rest }) => {
  const { register } = useFormContext();
  const [isActive, setIsActive] = useState(false);
  return (
    <label
      className="flex relative items-center mb-4 cursor-pointer"
      htmlFor={name}
      onClick={() => setIsActive(!isActive)}
    >
      <span className="relative flex items-center">
        <span
          className={
            isActive
              ? "absolute w-5 h-5 bg-white px-2 rounded-full right-0.5 transition shadow-sm"
              : "absolute w-5 h-5 bg-white px-2 rounded-full left-0.5 transition shadow-sm"
          }
        ></span>
        <div
          className={
            isActive
              ? "focus:ring-0 w-11 h-6 bg-blue-600 rounded-full border border-gray-200 dark:bg-gray-700 dark:border-gray-600"
              : "focus:ring-0 w-11 h-6 bg-gray-200 rounded-full border border-gray-200 dark:bg-gray-700 dark:border-gray-600"
          }
        />
        <input
          type="checkbox"
          checked={isActive}
          className="sr-only"
          {...register(name, { ...options })}
          {...rest}
        />
      </span>
      <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
    </label>
  );
};

export default Switch;
