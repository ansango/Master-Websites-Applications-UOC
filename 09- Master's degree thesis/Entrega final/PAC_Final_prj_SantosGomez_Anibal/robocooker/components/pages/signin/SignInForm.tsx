import { selectOnSignInStatus } from "@/store/features/user";
import { signIn } from "@/store/features/user/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ButtonLink from "components/common/Button/ButtonLink";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import { Form, Input } from "components/common/Forms";
import React, { FC, useCallback } from "react";
import SigInButton from "./SigInButton";

type Props = {};

const SignInForm: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const onSignIn = useCallback(
    ({ email, password }: { email: Email; password: Password }) =>
      dispatch(signIn({ email, password })),
    [dispatch]
  );

  return (
    <Form onSubmit={onSignIn}>
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
          name="password"
          label="Contraseña"
          type="password"
          options={{
            required: {
              value: true,
              message: "Introduce tu contraseña",
            },
          }}
        />
        <p className="text-sm">
          <ButtonLink href="/recovery" label="¿Olvidaste tu contraseña?" />
        </p>
        <SigInButton />
        <p className="text-sm space-x-1">
          <span>¿No tienes cuenta?</span>
          <ButtonLink href="/signup" label="Crea una!" />
        </p>
      </CardBasicContent>
    </Form>
  );
};

export default SignInForm;
