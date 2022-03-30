/**
 *? Badge Styles
 */

export enum size {
  default = "text-xs",
  large = "text-sm",
}

export enum kind {
  default = "font-medium rounded px-2.5 py-0.5",
  withIcon = "inline-flex items-center rounded px-2.5 py-0.5",
  iconOnly = "inline-flex items-center p-2 rounded-full",
}

export enum link {
  default = "hover:bg-blue-200 dark:hover:bg-blue-300 cursor-pointer",
  dark = "hover:bg-gray-200 dark:hover:bg-gray-300 cursor-pointer",
  red = "hover:bg-red-200 dark:hover:bg-red-300 cursor-pointer",
  green = "hover:bg-green-200 dark:hover:bg-green-300 cursor-pointer",
  yellow = "hover:bg-yellow-200 dark:hover:bg-yellow-300 cursor-pointer",
  indigo = "hover:bg-indigo-200 dark:hover:bg-indigo-300 cursor-pointer",
  purple = "hover:bg-purple-200 dark:hover:bg-purple-300 cursor-pointer",
  pink = "hover:bg-pink-200 dark:hover:bg-pink-300 cursor-pointer",
}

export enum style {
  default = "text-blue-800 bg-blue-100 dark:bg-blue-200 dark:text-blue-800",
  dark = "text-gray-800 bg-gray-100 dark:bg-gray-700 dark:text-gray-300",
  red = "text-red-800 bg-red-100 dark:bg-red-200 dark:text-red-900",
  green = "text-green-800 bg-green-100 dark:bg-green-200 dark:text-green-900",
  yellow = "text-yellow-800 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-900",
  indigo = "text-indigo-400 bg-indigo-100 dark:bg-indigo-200 dark:text-indigo-900",
  purple = "text-purple-800 bg-purple-100 dark:bg-purple-200 dark:text-purple-900",
  pink = "text-pink-800 bg-pink-100 dark:bg-pink-200 dark:text-pink-900",
}

export enum iconSize {
  iconOnly = "w-4 h-4",
  withIcon = "w-3 h-3 mr-1",
}
