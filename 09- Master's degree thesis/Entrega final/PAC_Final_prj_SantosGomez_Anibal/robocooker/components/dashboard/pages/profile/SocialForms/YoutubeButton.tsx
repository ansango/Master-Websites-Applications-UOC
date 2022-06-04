import { selectAccountOnUpdateYT } from "@/store/features/account/account";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const YoutubeButton = () => {
  const loading = useAppSelector(selectAccountOnUpdateYT) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default YoutubeButton;
