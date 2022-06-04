import Alert from "components/common/Alert/Alert";
import GenericDashboardHero from "components/common/Hero/GenericDashboardHero";
import ContainerDashboard from "components/dashboard/ContainerDashboard";
import AvatarForm from "components/dashboard/pages/profile/AvatarForm";
import DataAccountForm from "components/dashboard/pages/profile/DataAccountForm";
import DeleteAccount from "components/dashboard/pages/profile/DeleteAccount";
import PreferencesForm from "components/dashboard/pages/profile/PreferencesForm";
import ResetPasswordForm from "components/dashboard/pages/profile/ResetPasswordForm";
import SocialForms from "components/dashboard/pages/profile/SocialForms/SocialForms";
import DashboardLayout from "components/layout/DashboardLayout";
import { NextPage } from "next";

const Profile: NextPage = () => {
  return (
    <DashboardLayout>
      <ContainerDashboard>
        <GenericDashboardHero title="Tu cuenta" />
        <div className="grid gap-5 grid-cols-12">
          <div className="col-span-full md:col-span-6 flex flex-col justify-end space-y-5">
            <Alert />
            <div></div>
            <AvatarForm />
          </div>
          <div className="col-span-full md:col-span-6">
            <ResetPasswordForm />
          </div>
          <div className="col-span-full 2xl:col-span-4">
            <PreferencesForm />
          </div>
          <div className="col-span-full 2xl:col-span-8 flex flex-col justify-start space-y-5">
            <DataAccountForm />
            <SocialForms />
            <DeleteAccount />
          </div>
        </div>
      </ContainerDashboard>
    </DashboardLayout>
  );
};

export default Profile;
