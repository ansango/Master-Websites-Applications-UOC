
import { selectAccountOnUpdateAccount } from "@/store/features/account/account";
import { selectOnUpdateUserStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const DataAccountButton = () => {
  const accountLoading = useAppSelector(selectAccountOnUpdateAccount) === true;
  const userLoading = useAppSelector(selectOnUpdateUserStatus) === true;
  const loading = accountLoading || userLoading;
  return <ButtonSubmit isLoading={loading} />;
};

export default DataAccountButton;
