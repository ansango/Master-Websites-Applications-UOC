import { FC } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CollectionTabs from "./CollectionTabs";
import TabIngredients from "./TabIngredients";
import TabRecipes from "./TabRecipes";

const CollectionView: FC = () => {
  return (
    <Router>
      <div>
        <CollectionTabs />
        <Routes>
          <Route
            path={`/dashboard/collections/:id/ingredients`}
            element={<TabIngredients />}
          />
          <Route path={`/dashboard/collections/:id`} element={<TabRecipes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default CollectionView;
