import { useAppSelector } from "lib/store/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { selectUser } from "@/store/features/user";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import AuthLayout from "components/layout/AuthLayout";
import SignUpForm from "components/pages/signup/SignUpForm";

const SignUp: NextPage = () => {
  const user = useAppSelector(selectUser);
  const { push } = useRouter();
  useEffect(() => {
    if (user) push("/dashboard");
  }, [user, push]);

  return (
    <AuthLayout>
      <CardBasic>
        <CardBasicTitle title="Crea una cuenta" />
        <SignUpForm />
      </CardBasic>
    </AuthLayout>
  );
};

export default SignUp;
