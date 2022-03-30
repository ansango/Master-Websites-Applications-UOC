/**
 *? AlertContent Styles
 */

export const aBase = "p-4 mb-4 rounded-lg";

export enum aContKind {
  info = "bg-blue-100 dark:bg-blue-200",
  success = "bg-green-100 dark:bg-green-200",
  warning = "bg-yellow-100 dark:bg-yellow-200",
  danger = "bg-red-100 dark:bg-red-200",
  dark = "bg-gray-100 dark:bg-gray-200",
}

export const aTitleBase = "flex items-center";

export const aTitleIcon = "mr-2 w-5 h-5";

export enum aTitleIconKind {
  info = "text-blue-700 dark:text-blue-800",
  success = "text-green-700 dark:text-green-800",
  warning = "text-yellow-700 dark:text-yellow-800",
  danger = "text-red-700 dark:text-red-800",
  dark = "text-gray-700 dark:text-gray-800",
}

export const aTitle = "text-lg font-medium";

export enum aTitleKind {
  info = "text-blue-700 dark:text-blue-800",
  success = "text-green-700 dark:text-green-800",
  warning = "text-yellow-700 dark:text-yellow-800",
  danger = "text-red-700 dark:text-red-800",
  dark = "text-gray-700 dark:text-gray-800",
}

export const aContent = "mt-2 mb-4 text-sm";

export enum aContentKind {
  info = "text-blue-700 dark:text-blue-800",
  success = "text-green-700 dark:text-green-800",
  warning = "text-yellow-700 dark:text-yellow-800",
  danger = "text-red-700 dark:text-red-800",
  dark = "text-gray-700 dark:text-gray-800",
}

export const actionButton =
  "text-white focus:ring-4 font-medium rounded-lg text-xs px-3 py-1.5 mr-2 text-center inline-flex items-center";

export enum actionButtonKind {
  info = "bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-900",
  success = "bg-green-700 hover:bg-green-800 focus:ring-green-300 dark:bg-green-800 dark:hover:bg-green-900",
  warning = "bg-yellow-700 hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-800 dark:hover:bg-yellow-900",
  danger = "bg-red-700 hover:bg-red-800 focus:ring-red-300 dark:bg-red-800 dark:hover:bg-red-900",
  dark = "bg-gray-700 hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-800 dark:hover:bg-gray-900",
}

export const actionDismiss = "font-medium rounded-lg text-xs px-3 py-1.5 text-center";

export enum actionDismissKind {
  info = "focus:ring-4 text-blue-700 bg-transparent dark:border-blue-800 dark:text-blue-800 dark:hover:text-white border border-blue-700 hover:bg-blue-800 hover:text-white focus:ring-blue-300",
  success = "focus:ring-4 text-green-700 bg-transparent dark:border-green-800 dark:text-green-800 dark:hover:text-white border border-green-700 hover:bg-green-800 hover:text-white focus:ring-green-300",
  warning = "focus:ring-4 text-yellow-700 bg-transparent dark:border-yellow-800 dark:text-yellow-800 dark:hover:text-white border border-yellow-700 hover:bg-yellow-800 hover:text-white focus:ring-yellow-300",
  danger = "focus:ring-4 text-red-700 bg-transparent dark:border-red-800 dark:text-red-800 dark:hover:text-white border border-red-700 hover:bg-red-800 hover:text-white focus:ring-red-300",
  dark = "focus:ring-4 text-gray-700 bg-transparent dark:border-gray-800 dark:text-gray-800 dark:hover:text-white border border-gray-700 hover:bg-gray-800 hover:text-white focus:ring-gray-300",
}
