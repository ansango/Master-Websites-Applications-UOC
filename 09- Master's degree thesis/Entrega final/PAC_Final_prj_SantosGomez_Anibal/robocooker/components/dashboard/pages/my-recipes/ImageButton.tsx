import { selectOnUpdateRecipeAvatarStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const ImageButton = () => {
  const loading = useAppSelector(selectOnUpdateRecipeAvatarStatus) === true;
  return <ButtonSubmit isLoading={loading} />;
};

export default ImageButton;
