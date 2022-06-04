import { selectAccountOnUpdateIG } from "@/store/features/account/account";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const InstagramButton = () => {
  const loading = useAppSelector(selectAccountOnUpdateIG) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default InstagramButton;
