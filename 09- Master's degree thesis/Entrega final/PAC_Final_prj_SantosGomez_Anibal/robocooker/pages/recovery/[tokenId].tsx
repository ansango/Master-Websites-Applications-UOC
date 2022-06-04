import { findTokenByIdAndType } from "@/api/db/token";
import { database } from "@/api/middlewares";
import AuthLayout from "components/layout/AuthLayout";
import BadLink from "components/pages/recovery/BadLink";
import ResetForm from "components/pages/recovery/ResetForm";
import { GetServerSideProps, NextPage } from "next";
import nc from "next-connect";

type Props = {
  tokenId: TokenId;
  valid: boolean;
};

const Token: NextPage<Props> = ({ valid, tokenId }) => {
  return (
    <AuthLayout>
      <div className="max-w-md py-80 sm:py-64">
        {valid ? <ResetForm tokenId={tokenId} /> : <BadLink />}
      </div>
    </AuthLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  await nc().use(database).run(context.req, context.res);
  try {
    const tokenDoc = await findTokenByIdAndType(
      context.req.db,
      context.params.tokenId,
      "passwordReset"
    );
    return {
      props: {
        tokenId: context.params.tokenId,
        valid: !!tokenDoc,
      },
    };
  } catch (error) {
    return {
      props: {
        tokenId: context.params.tokenId,
        valid: false,
      },
    };
  }
};

export default Token;
