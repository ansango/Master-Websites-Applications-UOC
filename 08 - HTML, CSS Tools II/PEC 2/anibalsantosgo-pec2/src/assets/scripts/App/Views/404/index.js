import React from "react";
const NotFound = () => {
  return (
    <div className="d-flex justify-content-center align-items-center not-found">
      <h1 className="mr-3 pr-3 align-top border-right inline-block align-content-center">
        {"404"}
      </h1>
      <div className="inline-block align-middle">
        <h2 className="font-weight-normal lead" id="desc">
          {"The page you requested was not found."}
        </h2>
      </div>
    </div>
  );
};

export default NotFound;
