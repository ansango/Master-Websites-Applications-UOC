import { findAndDeleteTokenByIdAndType } from "@/api/db/token";
import { updateUserEmailVerifiedById } from "@/api/db/user";
import { database } from "@/api/middlewares";
import ButtonLink from "components/common/Button/ButtonLink";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import AuthLayout from "components/layout/AuthLayout";

import { GetServerSideProps, NextPage } from "next";
import nc from "next-connect";

type Props = {
  valid: boolean;
};

const Token: NextPage<Props> = ({ valid }) => {
  const title = valid ? "¡Tu correo ha sido verificado!" : "¡Link invalido!";
  const content = valid
    ? "Tu email ha sido verificado con éxito."
    : "El enlace que has utilizado para recuperar tu contraseña ha expirado o no es valido. Cierra esta ventana y vuelve a intentarlo.";
  return (
    <AuthLayout>
      <CardBasic>
        <CardBasicTitle title={title} />
        <CardBasicContent>
          <p>{content}</p>
          <p className="text-sm">
            <ButtonLink href="/" label="Volver al inicio" />
          </p>
        </CardBasicContent>
      </CardBasic>
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  await nc().use(database).run(context.req, context.res);
  try {
    const deletedToken = await findAndDeleteTokenByIdAndType(
      context.req.db,
      context.params.tokenId,
      "emailVerification"
    );
    if (!deletedToken) return { props: { valid: false } };
    await updateUserEmailVerifiedById(context.req.db, deletedToken.creatorId);
    return { props: { valid: true } };
  } catch (error) {
    return { props: { valid: false } };
  }
};

export default Token;
