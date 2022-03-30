/**
 *? Breadcrumb Styles
 */

export enum bKind {
  plain = "flex py-3 px-5",
  solid = "flex py-3 px-5 text-gray-700 bg-gray-50 rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700",
}

export const lBase = "inline-flex items-center space-x-1 md:space-x-3";
export const lItem = "flex items-center";
export const tLink =
  "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white";
export const tCurrent =
  "inline-flex items-center ml-1 text-sm font-medium md:ml-2 text-gray-400 dark:text-gray-500";
export const iBase = "mr-2 w-4 h-4";
export const iArrow = `${iBase} fill-current text-gray-400`;
