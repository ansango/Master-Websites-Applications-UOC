import { deleteUser } from "@/store/features/user/thunks";
import { useAppDispatch } from "@/store/hooks";
import CardBasic from "components/common/Cards/Basic/CardBasic";
import CardBasicAction from "components/common/Cards/Basic/CardBasicAction";
import CardBasicContent from "components/common/Cards/Basic/CardBasicContent";
import CardBasicTitle from "components/common/Cards/Basic/CardBasicTitle";
import { Form, Input } from "components/common/Forms";
import React, { useCallback } from "react";
import DeleteAccountButton from "./DeleteAccountButton";

const DeleteAccount = () => {
  const dispatch = useAppDispatch();
  const onSubmit = useCallback(
    async ({ password }: { password: Password }) => {
      await dispatch(deleteUser(password));
    },
    [dispatch]
  );
  return (
    <CardBasic>
      <CardBasicTitle title="Eliminar cuenta" />
      <Form onSubmit={onSubmit}>
        <CardBasicContent>
          <p className="text-sm">
            Eliminando tu cuenta, se eliminarán todos tus datos personales de
            forma permanente. Si deseas continuar, por favor, escribe tu
            contraseña actual para confirmar tu solicitud.
          </p>
          <div className="grid md:grid-cols-3">
            <Input
              label="Contraseña"
              type="password"
              name="password"
              options={{
                required: {
                  value: true,
                  message: "Introduce tu contraseña",
                },
              }}
            />
          </div>
          <CardBasicAction>
            <DeleteAccountButton />
          </CardBasicAction>
        </CardBasicContent>
      </Form>
    </CardBasic>
  );
};

export default DeleteAccount;
