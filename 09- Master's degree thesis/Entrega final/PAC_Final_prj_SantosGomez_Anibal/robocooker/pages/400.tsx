import MainLayout from "components/layout/MainLayout";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <MainLayout>
      <h1>404</h1>
      <p>Page not found</p>
    </MainLayout>
  );
};

export default NotFound;