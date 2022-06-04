import { selectOnUpdateStepsStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const StepsButton = () => {
  const loading = useAppSelector(selectOnUpdateStepsStatus) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default StepsButton;
