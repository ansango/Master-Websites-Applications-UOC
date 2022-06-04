import { selectAccountOnUpdateTW } from "@/store/features/account/account";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const TwitterButton = () => {
  const loading = useAppSelector(selectAccountOnUpdateTW) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default TwitterButton;
