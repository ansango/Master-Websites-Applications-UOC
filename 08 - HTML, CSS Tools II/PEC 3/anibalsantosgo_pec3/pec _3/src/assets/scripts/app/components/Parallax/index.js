import React from "react";
import PropTypes from "prop-types";

const Parallax = (props) => (
  <section
    className="parallax"
    style={{
      backgroundImage: `url(${props.img})`,
    }}
  >
    <div>
      <h1>{props.title}</h1>
    </div>
  </section>
);

Parallax.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Parallax;
