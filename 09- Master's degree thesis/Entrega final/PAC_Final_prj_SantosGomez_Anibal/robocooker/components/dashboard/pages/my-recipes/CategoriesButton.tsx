import { selectOnUpdateCategoriesStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const CategoriesButton = () => {
  const loading = useAppSelector(selectOnUpdateCategoriesStatus) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default CategoriesButton;
