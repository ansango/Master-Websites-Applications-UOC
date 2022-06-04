import { resetPassword } from "@/store/features/user/thunks";
import { useAppDispatch } from "@/store/hooks";
import { Form, Input } from "components/common/Forms";
import { useRouter } from "next/router";
import { FC, useCallback } from "react";
import ResetButton from "./ResetButton";

type Props = {
  tokenId: TokenId;
};

const ResetForm: FC<Props> = ({ tokenId }) => {
  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  const onRecovery = useCallback(
    ({ newPassword }: { newPassword: Password }) => {
      const redirect = () => replace("/signin");
      dispatch(resetPassword({ tokenId, newPassword, redirect }));
    },
    [dispatch, tokenId, replace]
  );
  return (
    <div className="card shadow-md bg-base-100 max-w-md w-full">
      <Form onSubmit={onRecovery} className="card-body">
        <h5 className="card-title">Resetear contraseña</h5>
        <div className="space-y-4">
          <Input
            name="newPassword"
            label="Nueva contraseña"
            type="password"
            options={{
              required: { value: true, message: "Introduce una contraseña" },
              minLength: {
                value: 8,
                message: "Tu contraseña tiene que tener al menos 8 caracteres",
              },
            }}
          />
          <ResetButton />
        </div>
      </Form>
    </div>
  );
};

export default ResetForm;
