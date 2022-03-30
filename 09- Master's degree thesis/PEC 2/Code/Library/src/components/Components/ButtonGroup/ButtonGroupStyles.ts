/**
 *? ButtonGroup Styles
 */

export const bgContainer = "inline-flex rounded-md shadow-sm";
export const bgBase =
  "inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white dark:bg-gray-700 focus:z-10 focus:ring-2 dark:text-white";

export enum bgKind {
  solid = "border-gray-200 hover:bg-gray-100 dark:border-gray-600",
  outline = "border hover:text-white focus:text-white dark:border-white dark:hover:text-white",
}

export const bgFirst = "rounded-l-lg border";
export const bgRest = "border-t border-b";
export const bgLast = "rounded-r-md border";

export enum bgStyleSolid {
  info = " hover:text-blue-700 focus:ring-blue-700 focus:text-blue-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white",
  success = " hover:text-green-700 focus:ring-green-700 focus:text-green-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-green-500 dark:focus:text-white",
  warning = " hover:text-yellow-700 focus:ring-yellow-700 focus:text-yellow-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-yellow-500 dark:focus:text-white",
  danger = " hover:text-red-700 focus:ring-red-700 focus:text-red-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-red-500 dark:focus:text-white",
  dark = " hover:text-gray-700 focus:ring-gray-700 focus:text-gray-700 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-500 dark:focus:text-white",
}

export enum bgStyleOutline {
  info = "border-blue-900 hover:bg-blue-900 focus:ring-blue-500 focus:bg-blue-900 dark:hover:bg-blue-700 dark:focus:bg-blue-700 text-blue-900",
  success = "border-green-900 hover:bg-green-900 focus:ring-green-500 focus:bg-green-900 dark:hover:bg-green-700 dark:focus:bg-green-700 text-green-900",
  warning = "border-yellow-900 hover:bg-yellow-900 focus:ring-yellow-500 focus:bg-yellow-900 dark:hover:bg-yellow-700 dark:focus:bg-yellow-700 text-yellow-900",
  danger = "border-red-900 hover:bg-red-900 focus:ring-red-500 focus:bg-red-900 dark:hover:bg-red-700 dark:focus:bg-red-700 text-red-900",
  dark = "border-gray-900 hover:bg-gray-900 focus:ring-gray-500 focus:bg-gray-900 dark:hover:bg-gray-700 dark:focus:bg-gray-700 text-gray-900",
}

export const iBase = "mr-2 w-4 h-4 fill-current";

export const disabled = "opacity-75 cursor-not-allowed";
