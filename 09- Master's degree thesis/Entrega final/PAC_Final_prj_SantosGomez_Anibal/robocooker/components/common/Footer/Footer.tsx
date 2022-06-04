import Link from "next/link";
import { Logo } from "components/common/Icons";
import { legalRoutes, mainRoutes } from "./routes";
import SocialIcons from "./SocialIcons";
import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="lg:container mx-auto p-5 bg-base text-base-content">
      <div className="footer">
        <div className="space-y-2">
          <Logo className="fill-current w-12 h-12" />
          <p className="max-w-xs">
            Robocooker.
            <br />
            La comunidad que te permite crear y compartir recetas para tu robot
            de cocina favorito. Cocina, comparte y disfruta!
          </p>
          <div className="flex space-x-5">
            <SocialIcons />
          </div>
        </div>
        <div>
          <span className="footer-title">Robocooker</span>
          {mainRoutes.map(({ name, path }) => (
            <Link key={path} href={path}>
              <a className="link link-hover">{name}</a>
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Legal</span>
          {legalRoutes.map(({ name, path }) => (
            <Link key={path} href={path}>
              <a className="link link-hover">{name}</a>
            </Link>
          ))}
        </div>
        <div>
          <span className="footer-title">Soporte</span>
          <Link href="/contact">
            <a className="hover:underline">Contacto</a>
          </Link>
          <Link href="/sponsors">
            <a className="hover:underline">Patrocinadores</a>
          </Link>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-center">
        <span className="text-gray-500 sm:text-center text-xs md:text-sm">
          © 2022 Robocooker. Todos los derechos reservados.
        </span>
      </div>
    </footer>
  );
};

const Footera = () => {
  return (
    <footer className="p-4 bg-white text-gray-600 space-y-12 text-sm">
      <div className="lg:container mx-auto">
        <div className="space-y-12 grid md:grid-cols-3 md:gap-6">
          <div className="space-y-6">
            <Link href="/">
              <a>
                <Logo />
              </a>
            </Link>
            <p>
              Robocooker, la comunidad que te permite crear y compartir recetas
              para tu robot de cocina favorito. Cocina, comparte y disfruta!
            </p>
            <SocialIcons />
          </div>
          <div className="space-y-8 md:col-span-2 md:space-y-0 md:grid md:grid-cols-3 md:gap-3">
            <div className="space-y-4">
              <p className="uppercase text-sm font-semibold">Robocooker</p>
              <ul className="space-y-4">
                {mainRoutes.map(({ name, path }) => (
                  <li key={path}>
                    <Link href={path}>
                      <a className="hover:underline">{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="uppercase text-sm font-semibold">Legal</p>
              <ul className="space-y-4">
                {legalRoutes.map(({ name, path }) => (
                  <li key={path}>
                    <Link href={path}>
                      <a className="hover:underline">{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <p className="uppercase text-sm font-semibold">Soporte</p>
              <ul className="space-y-4">
                <li>
                  <Link href="/contact">
                    <a className="hover:underline">Contacto</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sponsors">
                    <a className="hover:underline">Patrocinadores</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-gray-500 sm:text-center">
            © 2022 Robocooker. Todos los derechos reservados.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
