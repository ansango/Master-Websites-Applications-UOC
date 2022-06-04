import { selectOnRecoveryPasswordStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const RecoveryButton = () => {
  const loading = useAppSelector(selectOnRecoveryPasswordStatus) === true;
  return (
    <ButtonSubmit label="Recuperar contraseña" isLoading={loading} isFull />
  );
};

export default RecoveryButton;
