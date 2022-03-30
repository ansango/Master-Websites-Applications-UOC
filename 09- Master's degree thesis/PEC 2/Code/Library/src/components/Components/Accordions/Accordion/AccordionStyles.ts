/**
 *? Accordion Styles
 */

export const itemBase =
  "text-gray-500 dark:text-gray-400 dark:bg-gray-800 border-gray-200 dark:border-gray-700";

export const bBase =
  "flex items-center focus:ring-4 justify-between p-5 w-full font-medium border text-left";

export enum bKind {
  dark = "focus:ring-gray-200 dark:focus:ring-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800",
  info = "focus:ring-blue-300 dark:focus:ring-blue-800 hover:bg-blue-100 dark:hover:bg-blue-800",
  success = "focus:ring-green-300 dark:focus:ring-green-800 hover:bg-green-100 dark:hover:bg-green-800",
  warning = "focus:ring-yellow-300 dark:focus:ring-yellow-800 hover:bg-yellow-100 dark:hover:bg-yellow-800",
  danger = "focus:ring-red-300 dark:focus:ring-red-800 hover:bg-red-100 dark:hover:bg-red-800",
}

export const bFirst = `${bBase} rounded-t-xl border-b-0`;
export const bLast = `${bBase}`;
export const bRest = `${bBase} border-b-0`;

export enum bActiveKind {
  dark = "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-400",
  info = "bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-400",
  success = "bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-400",
  warning = "bg-yellow-100 dark:bg-yellow-800 text-yellow-700 dark:text-yellow-400",
  danger = "bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-400",
}

export const cBase = "p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 border-b-0";
export const cLast = `p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900`;
export const cAnimation = "h-0 overflow-hidden transition-height duration-300 ease-in";

export const iBase = "w-6 h-6";
export const iRotate = `${iBase} rotate-180`;
export const iWithTitle = `w-5 h-5 mr-2`;

export const sBase = "flex items-center";

export const tBase = "mb-2 text-gray-500 dark:text-gray-400";
