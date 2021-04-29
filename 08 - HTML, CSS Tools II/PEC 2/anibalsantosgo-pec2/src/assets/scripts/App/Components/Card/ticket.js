import React from "react";
import PropTypes from "prop-types";
const Ticket = (props) => {
  let appoint = props.appoint;
  let date = `${appoint.date.month} ${appoint.date.day} ${appoint.date.dayWeek}`;
  let country = `${appoint.location[1].region}`;
  let time = `${appoint.hour}`;
  let place = `${appoint.location[0].place}`;
  let event = `${place} | ${time}`;
  return (
    <div className="card mb-3">
      <div className="card-body d-flex justify-content-between">
        <div>
          <p>{date}</p>
          <p>{event}</p>
          <p>{country}</p>
          <button className="btn btn-primary text-white">Tickets</button>
        </div>
        <div>
          <i className="fas fa-ticket-alt text-primary"></i>
        </div>
      </div>
    </div>
  );
};

Ticket.propTypes = {
  appoint: PropTypes.array.isRequired,
};

export default Ticket;
