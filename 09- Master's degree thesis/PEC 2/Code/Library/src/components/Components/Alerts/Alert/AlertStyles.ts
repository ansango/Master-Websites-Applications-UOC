/**
 *? Alert Styles
 */

export const alertBase = "flex items center p-4 mb-4 text-sm";

export enum alertBorderKind {
  info = "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 border-t-4 border-blue-500",
  success = "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800 border-t-4 border-green-500",
  warning = "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800 border-t-4 border-yellow-500",
  danger = "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800 border-t-4 border-red-500",
  dark = "text-gray-700 bg-gray-100 dark:bg-gray-200 dark:text-gray-800 border-t-4 border-gray-500",
}

export enum alertKind {
  info = "text-blue-700 bg-blue-100 dark:bg-blue-200 dark:text-blue-800 rounded-lg",
  success = "text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800 rounded-lg",
  warning = "text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800 rounded-lg",
  danger = "text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800 rounded-lg",
  dark = "text-gray-700 bg-gray-100 dark:bg-gray-200 dark:text-gray-800 rounded-lg",
}

export const iconAlert = "flex-shrink-0 w-5 h-5 mr-3";

export const textBase = "text-sm font-medium";

export enum textKind {
  info = "text-blue-700 dark:text-blue-800",
  success = "text-green-700 dark:text-green-800",
  warning = "text-orange-700 dark:text-orange-800",
  danger = "text-red-700 dark:text-red-800",
  dark = "text-gray-700 dark:text-gray-800",
}

export const linkBase = "ml-2 font-semibold underline";

export enum linkKind {
  info = "hover:text-blue-800 dark:hover:text-blue-900",
  danger = "hover:text-red-800 dark:hover:text-red-900",
  success = "hover:text-green-800 dark:hover:text-green-900",
  warning = "hover:text-yellow-800 dark:hover:text-yellow-900",
  dark = "hover:text-gray-800 dark:hover:text-gray-900",
}

export const btnCloseBase =
  "ml-auto -mx-2.5 ml-1 -my-1.5 h-8 w-8 rounded-lg focus:ring-2 p-1.5 inline-flex";

export enum btnCloseKind {
  info = "bg-blue-100 text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:bg-blue-200 dark:text-blue-600 dark:hover:bg-blue-300",
  danger = "bg-red-100 text-red-500 focus:ring-red-400 hover:bg-red-200 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300",
  success = "bg-green-100 text-green-500 focus:ring-green-400 hover:bg-green-200 dark:bg-green-200 dark:text-green-600 dark:hover:bg-green-300",
  warning = "bg-yellow-100 text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300",
  dark = "bg-gray-100 text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:bg-gray-200 dark:text-gray-600 dark:hover:bg-gray-300",
}

export const iconClose = "flex items-center justify-center";
