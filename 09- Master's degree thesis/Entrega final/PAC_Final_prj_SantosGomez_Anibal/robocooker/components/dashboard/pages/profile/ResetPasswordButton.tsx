import { selectOnUpdatePasswordStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const ResetPasswordButton = () => {
  const loading = useAppSelector(selectOnUpdatePasswordStatus) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default ResetPasswordButton;
