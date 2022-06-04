import { selectOnUpdateBasicInfoStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const BasicDataButton = () => {
  const loading = useAppSelector(selectOnUpdateBasicInfoStatus) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default BasicDataButton;
