import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";
import React from "react";

const Messages: NextPage = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Mensajes" />
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Messages;
