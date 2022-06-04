import { selectOnSignInStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";
import { FC } from "react";

const SigInButton: FC = () => {
  const loading = useAppSelector(selectOnSignInStatus) === true;
  return <ButtonSubmit isLoading={loading} isFull label="Iniciar sesión" />;
};

export default SigInButton;
