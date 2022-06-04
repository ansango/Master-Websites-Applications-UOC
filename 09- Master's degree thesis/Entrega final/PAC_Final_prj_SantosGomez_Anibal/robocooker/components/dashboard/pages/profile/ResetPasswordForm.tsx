import { useAppDispatch } from "lib/store/hooks";
import { Form, Input } from "components/common/Forms";
import { useCallback } from "react";
import { updatePassword } from "@/store/features/user/thunks";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import CardBasicAction from "components/common/Cards/Basic/CardBasicAction";
import ResetPasswordButton from "./ResetPasswordButton";

const ResetPasswordForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    ({
      oldPassword,
      newPassword,
    }: {
      oldPassword: Password;
      newPassword: Password;
    }) => {
      dispatch(updatePassword({ oldPassword, newPassword }));
    },
    [dispatch]
  );

  return (
    <CardBasic>
      <CardBasicTitle title="Cambio de contraseña" />
      <Form onSubmit={onSubmit}>
        <CardBasicContent>
          <Input
            label="Contraseña actual"
            type="password"
            name="oldPassword"
            options={{
              required: { value: true, message: "Introduce tu contraseña" },
            }}
          />
          <Input
            label="Nueva contraseña"
            type="password"
            name="newPassword"
            options={{
              required: { value: true, message: "Introduce tu contraseña" },
            }}
          />{" "}
          <CardBasicAction>
            <ResetPasswordButton />
          </CardBasicAction>
        </CardBasicContent>
      </Form>
    </CardBasic>
  );
};

export default ResetPasswordForm;
