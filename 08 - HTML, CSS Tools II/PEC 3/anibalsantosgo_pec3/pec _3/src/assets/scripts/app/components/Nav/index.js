import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import {
  IconOpen,
  IconClose,
  MobileLinks,
  DesktopLinks,
  HomeLink,
} from "./BlocksNav";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="block">
          <HomeLink />
          <div className="blank"></div>
          <div>
            <div className="hidden sm:flex">
              <DesktopLinks />
            </div>
            <button
              type="button"
              className="mobile-btn"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <IconOpen /> : <IconClose />}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <MobileLinks />
      </Transition>
    </nav>
  );
};

export default Nav;
