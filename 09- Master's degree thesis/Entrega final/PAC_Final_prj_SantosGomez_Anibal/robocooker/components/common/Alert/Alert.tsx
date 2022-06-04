import { selectOnVerifyEmailStatus, selectUser } from "@/store/features/user";
import { verifyEmail } from "@/store/features/user/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { FC } from "react";
import { Icon } from "../Icons";

const Alert: FC<{}> = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const cn =
    useAppSelector(selectOnVerifyEmailStatus) === true
      ? "btn btn-ghost normal-case text-gray-800 btn-sm loading"
      : "btn btn-ghost normal-case text-gray-800 btn-sm";
  const onVerify = () => dispatch(verifyEmail());
  return (
    <>
      {!user?.emailVerified && (
        <div className="alert alert-info shadow-lg">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center space-x-2">
              <Icon
                icon="InformationCircleIcon"
                kind="outline"
                className="w-5 h-5"
              />
              <span>Parece que todavía no has verificado tu email</span>
            </div>
            <button className={cn} onClick={onVerify}>
              Verificar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
