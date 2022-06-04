import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardContainer: FC<Props> = ({ children }) => {
  return (
    <div className="mx-auto max-w-2xl p-0 sm:p-5">
      <div className="bg-gradient-to-r p-0.5 from-[#a7ecd0] to-[#b565ff] rounded-2xl">
        <div className="bg-base-100 p-5 rounded-2xl shadow-sm sm:p-10">
          <div className="flex flex-col sm:flex-row sm:space-x-5">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
