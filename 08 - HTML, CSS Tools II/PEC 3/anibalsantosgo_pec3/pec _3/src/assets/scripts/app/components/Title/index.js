import React from "react";
import PropTypes from "prop-types";

const Title = (props) => (
  <h1 className={`font-serif uppercase mb-5 text-6xl md:text-8xl xl:text-9xl`}>
    {props.text}
  </h1>
);

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
