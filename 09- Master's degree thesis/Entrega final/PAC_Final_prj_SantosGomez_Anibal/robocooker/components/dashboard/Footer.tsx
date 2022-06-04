import SocialIcons from "components/common/Footer/SocialIcons";
import { Logo } from "components/common/Icons";
import React from "react";

<footer className="w-full bg-white rounded-lg shadow md:flex md:items-center md:justify-between p-6 space-y-5">
  <span className="text-gray-500 text-sm">
    © 2022 Robocooker. Todos los derechos reservados.
  </span>
  <SocialIcons />
</footer>;
const Footer = () => {
  return (
    <footer className="bg-base-100 footer items-center p-4 text-neutral">
      <div className="items-center grid-flow-col">
        <Logo className="fill-current w-8 h-8" />
        <p>© 2022 Robocooker. Todos los derechos reservados.</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
