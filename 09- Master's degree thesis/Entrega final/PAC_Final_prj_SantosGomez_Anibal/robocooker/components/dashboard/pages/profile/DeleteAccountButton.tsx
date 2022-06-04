import { selectOnDeleteUserStatus } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";

const DeleteAccountButton = () => {
  const loading = useAppSelector(selectOnDeleteUserStatus) === true;
  const cn = loading
    ? "btn btn-error normal-case loading"
    : "btn btn-error normal-case";
  return (
    <button className={cn} type="submit">
      Eliminar cuenta
    </button>
  );
};

export default DeleteAccountButton;
