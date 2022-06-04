
import { selectAccountOnUpdateAvatar } from "@/store/features/account/account";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const AvatarButton = () => {
  const loading = useAppSelector(selectAccountOnUpdateAvatar) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default AvatarButton;
