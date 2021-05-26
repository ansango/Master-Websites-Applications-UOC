import React from "react";
import PropTypes from "prop-types";
import { FaTicketAlt } from "react-icons/fa";

const Table = (props) => {
  const appoints = props.appoints.map((appoint, index) => {
    let date = `${appoint.date.month} ${appoint.date.day} ${appoint.date.dayWeek}`;
    let country = `${appoint.location[1].region}`;
    let time = `${appoint.hour}`;
    let place = `${appoint.location[0].place}`;
    let event = `${place} | ${time}`;
    return (
      <tr key={index}>
        <td className="icon">
          <FaTicketAlt size={20} />
        </td>
        <td className="data">{date}</td>
        <td className="data">{event}</td>
        <td className="data">{country}</td>
        <td className="action">
          <button>Tickets</button>
        </td>
      </tr>
    );
  });
  return (
    <table className="table">
      <tbody>{appoints}</tbody>
    </table>
  );
};

Table.propTypes = {
  appoints: PropTypes.array.isRequired,
};

export default Table;
