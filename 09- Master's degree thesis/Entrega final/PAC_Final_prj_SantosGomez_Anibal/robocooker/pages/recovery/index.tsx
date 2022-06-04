import { NextPage } from "next";
import AuthLayout from "components/layout/AuthLayout";
import RecoveryForm from "components/pages/recovery/RecoveryForm";
const Recovery: NextPage = () => {
  return (
    <AuthLayout>
      <RecoveryForm />
    </AuthLayout>
  );
};

export default Recovery;
