import React, { FC } from "react";

type Props = {
  name: string;
  description: string;
  categories: string[];
};

const CardBody: FC<Props> = ({ categories, name, description }) => {
  return (
    <div className="card-body space-y-1">
      <div className="justify-end space-y-2">
        {categories.slice(0, 2).map((category, index) => (
          <div key={index} className="badge capitalize badge-accent mr-2">
            {category}
          </div>
        ))}
      </div>
      <h4 className="card-title line-clamp-1">{name}</h4>
      <p className="line-clamp-3">{description}</p>
    </div>
  );
};

export default CardBody;
