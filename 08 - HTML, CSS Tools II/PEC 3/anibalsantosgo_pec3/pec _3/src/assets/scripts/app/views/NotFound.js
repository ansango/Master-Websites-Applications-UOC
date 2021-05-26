import React from "react";
import Title from "../components/Title";

const title = "404";
const text = "The page you requested was not found.";

const NotFound = () => {
  return (
    <div className="view">
      <div className="not-found">
        <Title text={title} />
        <p>{text}</p>
      </div>
    </div>
  );
};

export default NotFound;
