import { selectOnDeleteRecipeStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";
import ButtonSubmit from "components/common/Button/ButtonSubmit";

const DeleteButton = () => {
  const cn =
    useAppSelector(selectOnDeleteRecipeStatus) === true
      ? "btn btn-error normal-case loading"
      : "btn btn-error normal-case";

  return (
    <button className={cn} type="submit">
      Eliminar receta
    </button>
  );
};

export default DeleteButton;
