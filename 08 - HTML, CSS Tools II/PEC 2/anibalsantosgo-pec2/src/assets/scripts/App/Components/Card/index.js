import React from "react";
import PropTypes from "prop-types";
const Card = (props) => {
  return (
    <div className="component_card">
      <div className="component_content">
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${props.thumb})`,
          }}
        >
          <div className="layer">
            <div>
              <h5>
                <i className={`${props.emoji}`}></i>
                {props.name}
              </h5>
              <h6>
                <i className={`${props.icon}`}></i>
                {props.position}
              </h6>
              <q>
                <i className="far fa-heart"></i>
                {props.love}
              </q>
            </div>

            <a
              className="twitter"
              href={props.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  thumb: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  love: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default Card;
