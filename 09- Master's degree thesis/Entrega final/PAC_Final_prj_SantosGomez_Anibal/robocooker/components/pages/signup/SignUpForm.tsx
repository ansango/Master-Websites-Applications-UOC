import { signUp } from "@/store/features/user/thunks";
import { useAppDispatch } from "@/store/hooks";
import ButtonLink from "components/common/Button/ButtonLink";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import { Form, Input } from "components/common/Forms";
import { FC, useCallback } from "react";
import SignUpButton from "./SignUpButton";

const SignUpForm: FC = () => {
  const dispatch = useAppDispatch();
  const onSignUp = useCallback(
    ({
      username,
      email,
      password,
    }: {
      username: Username;
      email: Email;
      password: Password;
    }) => {
      dispatch(signUp({ username, email, password }));
    },
    [dispatch]
  );
  return (
    <Form onSubmit={onSignUp}>
      <CardBasicContent>
        <Input
          name="email"
          label="Tu correo"
          type="email"
          options={{
            required: { value: true, message: "Introduce un email" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Introduce un email valido",
            },
          }}
        />
        <Input
          name="username"
          label="Nombre de usuario"
          type="text"
          options={{
            required: {
              value: true,
              message: "Introduce un nombre de usuario",
            },
            minLength: {
              value: 4,
              message: "El nombre de usuario debe tener al menos 4 caracteres",
            },
          }}
        />
        <Input
          name="password"
          label="Contraseña"
          type="password"
          options={{
            required: {
              value: true,
              message: "Introduce una contraseña",
            },
            minLength: {
              value: 8,
              message: "Tu contraseña tiene que tener al menos 8 caracteres",
            },
          }}
        />

        <SignUpButton />
        <p className="text-sm space-x-2">
          <span>¿Ya tienes una cuenta?</span>
          <ButtonLink href="/signin" label="Inicia sesión" />
        </p>
      </CardBasicContent>
    </Form>
  );
};

export default SignUpForm;
