import { Icon } from "components/common/Icons";
import AddRecipe from "components/common/Navbar/AddRecipe";
import SignIn from "components/common/Navbar/SignIn";
import User from "components/common/Navbar/User";
import { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="navbar bg-base-300 sticky top-0 z-50">
      <div className="navbar-start">
        <label
          htmlFor="my-drawer-2"
          className="drawer-button btn btn-ghost btn-circle lg:hidden"
        >
          <Icon icon="MenuAlt2Icon" kind="outline" className="w-5 h-5" />
        </label>
      </div>
      <div className="navbar-end">
        <AddRecipe />
        <User />
        <SignIn />
      </div>
    </div>
  );
};

export default Navbar;
