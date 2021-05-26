import React from "react";
import PropTypes from "prop-types";
import { FaTicketAlt } from "react-icons/fa";
const Ticket = (props) => {
  let appoint = props.appoint;
  let date = `${appoint.date.month} ${appoint.date.day} ${appoint.date.dayWeek}`;
  let country = `${appoint.location[1].region}`;
  let time = `${appoint.hour}`;
  let place = `${appoint.location[0].place}`;
  let event = `${place} | ${time}`;
  return (
    <div className="ticket">
      <div>
        <div>
          <p>{date}</p>
          <p>{event}</p>
          <p>{country}</p>
          <button>Tickets</button>
        </div>
        <span>
          <FaTicketAlt size={20} />
        </span>
      </div>
    </div>
  );
};
Ticket.propTypes = {
  appoint: PropTypes.object.isRequired,
};

export default Ticket;
