import React from "react";
import PropTypes from "prop-types";
const Quote = (props) => {
  return (
    <div className={`note text-${props.position}`}>
      <figure>
        <blockquote cite={props.url}>
          <p className="fst-italic">{`"${props.content}"`}</p>
        </blockquote>
        <figcaption>
          <span className="fw-bold">—{props.author}</span>,{" "}
          <cite>{props.cite}</cite>
        </figcaption>
      </figure>
    </div>
  );
};

Quote.propTypes = {
  position: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  cite: PropTypes.string.isRequired,
};

export default Quote;
