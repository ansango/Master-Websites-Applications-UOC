import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const BlockEmpty = () => <div className="block-empty"></div>;
export const BlockLink = (props) => {
  const [background, setBackground] = useState("");
  return (
    <NavLink
      className="block-link"
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      onMouseEnter={() => setBackground(props.img)}
      onMouseLeave={() => setBackground()}
      to={props.path}
    >
      <h3>{props.text}</h3>
    </NavLink>
  );
};

BlockLink.propTypes = {
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export const BlockText = (props) => (
  <div className="block-text">
    <h3>{props.text}</h3>
  </div>
);

BlockText.propTypes = {
  text: PropTypes.string.isRequired,
};
