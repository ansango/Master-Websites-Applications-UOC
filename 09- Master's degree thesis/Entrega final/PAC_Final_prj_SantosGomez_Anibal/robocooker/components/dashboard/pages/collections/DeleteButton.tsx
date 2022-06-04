import { selectOnDeleteRecipeStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";

const DeleteButton = () => {
  const cn =
    useAppSelector(selectOnDeleteRecipeStatus) === true
      ? "btn btn-error normal-case loading"
      : "btn btn-error normal-case";

  return (
    <button className={cn} type="submit">
      Eliminar colección
    </button>
  );
};

export default DeleteButton;
