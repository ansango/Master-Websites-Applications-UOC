/**
 *? AccordionFlush Styles
 */
export const itemBase = "text-gray-500 dark:text-gray-400";

export const bBase =
  "flex items-center justify-between p-5 w-full font-medium border border-t-0 border-x-0 text-left";

export enum bKind {
  dark = "hover:text-gray-700 hover:dark:text-gray-400",
  info = "hover:text-blue-700 hover:dark:text-blue-400",
  success = "hover:text-green-700 hover:dark:text-green-400",
  warning = "hover:text-yellow-700 hover:dark:text-yellow-400",
  danger = "hover:text-red-700 hover:dark:text-red-400",
}

export const bFirst = `${bBase} rounded-t-xl`;
export const bLast = `${bBase}`;
export const bRest = `${bBase}`;

export enum bActiveKind {
  dark = "text-gray-700 dark:text-gray-400",
  info = "text-blue-700 dark:text-blue-400",
  success = "text-green-700 dark:text-green-400",
  warning = "text-yellow-700 dark:text-yellow-400",
  danger = "text-red-700 dark:text-red-400",
}

export const cBase =
  "p-5 border border-x-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900";
export const cLast = `p-5 border border-x-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900`;
export const cAnimation = "h-0 overflow-hidden transition-height duration-300 ease-in";

export const iBase = "w-6 h-6";
export const iRotate = `${iBase} rotate-180`;
export const iWithTitle = `w-5 h-5 mr-2`;

export const sBase = "flex items-center";

export const tBase = "mb-2 text-gray-500 dark:text-gray-400";