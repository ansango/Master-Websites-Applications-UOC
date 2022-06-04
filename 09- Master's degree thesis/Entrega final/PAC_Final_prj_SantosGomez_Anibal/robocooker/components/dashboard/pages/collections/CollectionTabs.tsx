import { selectCollectionId } from "@/store/features/account/collection";
import { useAppSelector } from "@/store/hooks";
import { FC } from "react";
import { NavLink } from "react-router-dom";

const CollectionTabs: FC = () => {
  const collectionId = useAppSelector(selectCollectionId);
  if (!collectionId) return null;
  return (
    <div className="tabs">
      <NavLink
        to={`/dashboard/collections/${collectionId}`}
        className={({ isActive }) =>
          isActive ? "tab tab-lifted tab-active" : "tab tab-lifted"
        }
        end
      >
        Recetas
      </NavLink>

      <NavLink
        to={`/dashboard/collections/${collectionId}/ingredients`}
        className={({ isActive }) =>
          isActive ? "tab tab-lifted tab-active" : "tab tab-lifted"
        }
      >
        Ingredientes
      </NavLink>
    </div>
  );
};

export default CollectionTabs;
