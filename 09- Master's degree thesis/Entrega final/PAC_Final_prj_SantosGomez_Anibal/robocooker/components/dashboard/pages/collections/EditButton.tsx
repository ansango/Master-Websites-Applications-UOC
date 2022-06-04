import { selectOnDeleteRecipeStatus } from "@/store/features/account/myRecipes";
import { useAppSelector } from "@/store/hooks";

const EditButton = () => {
  const cn =
    useAppSelector(selectOnDeleteRecipeStatus) === true
      ? "btn btn-primary normal-case loading"
      : "btn btn-primary normal-case";

  return (
    <button className={cn} type="submit">
      Guardar
    </button>
  );
};

export default EditButton;
