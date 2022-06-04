import { FC } from "react";
import NavMobile from "./NavMobile";
import SignIn from "./SignIn";
import AddRecipe from "./AddRecipe";
import NavDesktop from "./NavDesktop";
import User from "./User";
import Brand from "./Brand";
import ThemeIcon from "./ThemeIcon";

const Navbar: FC = () => {
  return (
    <div className="navbar bg-base-100 sticky top-0 z-50">
      <div className="navbar-start">
        <NavMobile />
        <Brand />
        <NavDesktop />
      </div>
      <div className="navbar-end">
        <AddRecipe />
        <User />
        <ThemeIcon />
        <SignIn />
      </div>
    </div>
  );
};

export default Navbar;
