import MainLayout from "components/layout/MainLayout";
import { NextPage } from "next";

const ErrorServer: NextPage = () => {
  return (
    <MainLayout>
      <h1>500</h1>
      <p>Server error</p>
    </MainLayout>
  );
};

export default ErrorServer;
