import { selectOnAddCollection } from "@/store/features/account/bookmark";
import { useAppSelector } from "@/store/hooks";

const CreateButton = () => {
  const cn =
    useAppSelector(selectOnAddCollection) === true
      ? "btn btn-primary normal-case loading"
      : "btn btn-primary normal-case";

  return (
    <button className={cn} type="submit">
      Crear
    </button>
  );
};

export default CreateButton;
