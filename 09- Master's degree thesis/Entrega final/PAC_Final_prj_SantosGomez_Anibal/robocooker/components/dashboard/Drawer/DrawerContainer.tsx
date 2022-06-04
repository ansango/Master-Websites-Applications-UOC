import React, { FC, ReactNode } from "react";
import DrawerBar from "./DrawerBar";

type Props = {
  children?: ReactNode;
};

const DrawerContainer: FC<Props> = ({ children }) => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content flex flex-col items-center justify-center relative bg-base-200">
        {children}
      </div>
      <DrawerBar />
    </div>
  );
};

export default DrawerContainer;
