//@ts-ignore
export const debounce = (func, wait) => {
  //@ts-ignore
  let timeout;
  //@ts-ignore
  return function (...args) {
    //@ts-ignore
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      func.apply(null, args);
    }, wait);
  };
};
