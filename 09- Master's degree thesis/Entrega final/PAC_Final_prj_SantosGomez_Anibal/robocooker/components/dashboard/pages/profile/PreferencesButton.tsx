import { selectAccountOnUpdatePreferences } from "@/store/features/account/account";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const PreferencesButton = () => {
  const loading = useAppSelector(selectAccountOnUpdatePreferences) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default PreferencesButton;
