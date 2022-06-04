import React, { FC } from "react";

type Props = {
  length: number;
};
const CategoriesCards: FC<Props> = ({ length }) => {
  const render = Array.from({ length }, (_, i) => ({ id: i }));
  return (
    <>
      {render.map(({ id }) => (
        <div
          key={id}
          className="card w-full before:bg-gray-200 before:dark:bg-gray-800 image-full bg-gradient-to-l from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 shadow-xl"
        >
          <figure className="w-full h-44 lg:h-52 relative"></figure>
          <div className="card-body justify-end p-5">
            <h2 className="card-title bg-gray-300 dark:bg-gray-600 h-5 w-5 px-20 rounded animate-pulse"></h2>
            <h2 className="card-title bg-gray-400 dark:bg-gray-700 h-5 w-5 px-16 rounded animate-pulse"></h2>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoriesCards;
