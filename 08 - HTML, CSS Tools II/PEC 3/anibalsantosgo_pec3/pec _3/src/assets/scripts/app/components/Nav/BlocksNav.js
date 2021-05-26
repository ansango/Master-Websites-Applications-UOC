import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../routes";

export const HomeLink = () => (
  <NavLink to="/" className="home-link">
    <code>{"!"}</code>
    {"undefined"}
  </NavLink>
);

export const DesktopLinks = () =>
  routes.map(({ name, path }, key) => {
    if (name !== "home" && name !== "404") {
      return (
        <div className="link" key={key}>
          <NavLink to={path}>{name}</NavLink>
        </div>
      );
    }
  });

export const MobileLinks = () => (
  <div className="mobile-menu">
    <DesktopLinks />
  </div>
);

export const IconOpen = () => (
  <svg
    className="h-6 w-6 text-primary"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
export const IconClose = () => (
  <svg
    className="h-6 w-6 text-primary"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);
