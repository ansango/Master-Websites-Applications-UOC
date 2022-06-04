import { FC } from "react";

type Props = {
  title: string;
};

const GenericDashboardHero: FC<Props> = ({ title }) => {
  return (
    <div className="hero h-20">
      <div className="hero-content justify-start w-full p-0">
        <div className="sm:max-w-lg">
          <h1 className="text-3xl font-bold dark:text-gray-300">{title}</h1>
        </div>
      </div>
    </div>
  );
};

export default GenericDashboardHero;
