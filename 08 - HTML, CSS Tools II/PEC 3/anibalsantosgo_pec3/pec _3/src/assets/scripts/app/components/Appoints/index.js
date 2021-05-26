import React from "react";
import appoints from "../../data/appoints";
import Ticket from "../Card/ticket";
import Table from "../Table";

const tickets = appoints.map((appoint, index) => {
  return <Ticket key={index} appoint={appoint} />;
});

const Appoints = () => {
  return (
    <>
      <div className="appoints-mobile">{tickets}</div>
      <div className="appoints-tablet">
        <Table appoints={appoints} />
      </div>
    </>
  );
};

export default Appoints;
