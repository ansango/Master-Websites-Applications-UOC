import React from "react";
import Parallax from "../components/Parallax";
import Appoints from "../components/Appoints";
import tour from "../../../images/parallax/tour.jpg";
import Table from "../components/Table";
import Gallery from "../components/Gallery";

const Tour = () => {
  return (
    <>
      <Parallax img={tour} title={"TOUR 2021"} />
      <div className="view">
        <Appoints />
        <Gallery />
      </div>
    </>
  );
};

export default Tour;
