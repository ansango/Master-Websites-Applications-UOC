import { FC } from "react";

const Divider: FC = () => {
  return (
    <div className="divider before:bg-gradient-to-r before:from-[#a7ecd0] before:via-[#5d97f5] before:to-[#b565ff] p-1 rounded-lg after:bg-gradient-to-r after:from-[#b565ff] after:via-[#5d97f5] after:to-[#a7ecd0]" />
  );
};

export default Divider;
