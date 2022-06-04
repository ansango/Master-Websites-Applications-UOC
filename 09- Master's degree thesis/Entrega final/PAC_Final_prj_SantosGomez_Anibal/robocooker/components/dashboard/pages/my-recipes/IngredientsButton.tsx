import { selectOnUpdateIngredientsStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const IngredientsButton = () => {
  const loading = useAppSelector(selectOnUpdateIngredientsStatus) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default IngredientsButton;
