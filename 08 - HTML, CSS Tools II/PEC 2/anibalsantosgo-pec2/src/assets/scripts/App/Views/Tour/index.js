import React from "react";
import Ticket from "../../Components/Card/ticket";
import Table from "../../Components/Table";
import Gallery from "../../Components/Gallery";
import Parallax from "../../Components/Parallax";
import smoke from "../../../../images/gallery/tour.jpg";
import appoints from "../../Data/appoints";
const Tour = () => {
  return (
    <div className="view view-tour">
      <div className="mb-5">
        <Parallax isTour title={"TOUR 2021"} height={500} img={smoke} />
      </div>

      <div className="container mb-5">
        <div className="container d-md-none">
          {appoints.map((appoint, index) => {
            return <Ticket key={index} appoint={appoint} />;
          })}
        </div>
        <div className="container d-none d-md-block">
          <Table appoints={appoints} />
        </div>
      </div>
      <div className="container">
        <Gallery />
      </div>
    </div>
  );
};

export default Tour;
