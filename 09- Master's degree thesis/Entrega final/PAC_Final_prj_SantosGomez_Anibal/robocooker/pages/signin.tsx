import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { selectUser } from "@/store/features/user";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import AuthLayout from "components/layout/AuthLayout";
import SignInForm from "components/pages/signin/SignInForm";
import { useAppSelector } from "@/store/hooks";

const SignIn: NextPage = () => {
  const user = useAppSelector(selectUser);
  const { push } = useRouter();

  useEffect(() => {
    if (user) push("/dashboard");
  }, [user, push]);

  return (
    <AuthLayout>
      <CardBasic>
        <CardBasicTitle title="Inicia sesión" />
        <SignInForm />
      </CardBasic>
    </AuthLayout>
  );
};

export default SignIn;
