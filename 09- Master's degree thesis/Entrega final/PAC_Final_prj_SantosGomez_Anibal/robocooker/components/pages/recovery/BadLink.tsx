import ButtonLink from "components/common/Button/ButtonLink";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import { FC } from "react";

const BadLink: FC = () => {
  return (
    <CardBasic>
      <CardBasicTitle title="Enlace invalido o expirado" />
      <CardBasicContent>
        <p>
          El enlace que has utilizado para recuperar tu contraseña ha expirado o
          no es valido. Cierra esta ventana y vuelve a intentarlo.
        </p>
        <p className="text-sm">
          <ButtonLink href="/" label="Volver al inicio" />
        </p>
      </CardBasicContent>
    </CardBasic>
  );
};

export default BadLink;
