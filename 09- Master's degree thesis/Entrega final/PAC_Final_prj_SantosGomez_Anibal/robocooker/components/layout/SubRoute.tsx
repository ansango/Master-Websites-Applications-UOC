import React, { FC, ReactNode } from "react";

type Props = { children: ReactNode; className?: string };

const SubRoute: FC<Props> = ({ children, className }) => {
  const cn = className
    ? `rounded-b-box shadow-sm ${className}`
    : "rounded-b-box shadow-sm";
  return (
    <div className={cn}>
      <div className="preview bg-base-100 rounded-b-box rounded-tr-box p-5 border-l">
        {children}
      </div>
    </div>
  );
};

export default SubRoute;
