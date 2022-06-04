const routeActive = (pathname: string, href: string) => {
  return pathname === href ? true : false;
};

export { routeActive };
