import { selectOnResetPasswordStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";
import { FC } from "react";

const ResetButton: FC = () => {
  const loading = useAppSelector(selectOnResetPasswordStatus) === true;
  return <ButtonSubmit label="Recuperar cuenta" isLoading={loading} isFull />;
};

export default ResetButton;
