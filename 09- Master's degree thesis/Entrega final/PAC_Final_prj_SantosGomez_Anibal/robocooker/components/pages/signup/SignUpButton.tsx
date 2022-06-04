import { selectOnSignUpStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";
import { FC } from "react";

const SignUpButton: FC = () => {
  const loading = useAppSelector(selectOnSignUpStatus) === true;
  return <ButtonSubmit isLoading={loading} isFull label="Registrarse" />;
};

export default SignUpButton;
