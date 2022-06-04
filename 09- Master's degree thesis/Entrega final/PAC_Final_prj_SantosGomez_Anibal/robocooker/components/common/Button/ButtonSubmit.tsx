import { FC } from "react";

type Props = {
  label?: string;
  isFull?: boolean;
  isLoading?: boolean;
};

const ButtonSubmit: FC<Props> = ({
  isLoading = false,
  isFull = false,
  label = "Guardar",
}) => {
  const full = isFull ? "w-full" : "";
  const loading = isLoading ? "loading" : "";
  const cn = `btn btn-primary normal-case ${full} ${loading}`;
  return (
    <button type="submit" className={cn}>
      {label}
    </button>
  );
};

export default ButtonSubmit;
