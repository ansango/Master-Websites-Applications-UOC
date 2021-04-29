import React from "react";
import PropTypes from "prop-types";

const Table = (props) => {
  return (
    <table className="table">
      <thead></thead>
      <tbody>
        {props.appoints.map((appoint, index) => {
          let date = `${appoint.date.month} ${appoint.date.day} ${appoint.date.dayWeek}`;
          let country = `${appoint.location[1].region}`;
          let time = `${appoint.hour}`;
          let place = `${appoint.location[0].place}`;
          let event = `${place} | ${time}`;
          return (
            <tr key={index}>
              <td>
                <i className="fas fa-ticket-alt text-primary"></i>
              </td>
              <td>{date}</td>
              <td>{event}</td>
              <td>{country}</td>
              <td>
                <button className="btn btn-primary text-white">Tickets</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

Table.propTypes = {
  appoints: PropTypes.array.isRequired,
};

export default Table;
