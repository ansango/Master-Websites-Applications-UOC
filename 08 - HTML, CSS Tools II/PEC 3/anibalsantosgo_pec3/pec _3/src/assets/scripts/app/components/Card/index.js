import React from "react";
import PropTypes from "prop-types";
import { FaHeart, FaTwitter } from "react-icons/fa";
const Card = (props) => {
  return (
    <div className="card">
      <div>
        <div
          className="thumbnail"
          style={{
            backgroundImage: `url(${props.thumb})`,
          }}
        >
          <div className="layer">
            <div>
              <h5>
                <span className="icon">{props.emoji}</span>
                <span>{props.name}</span>
              </h5>
              <h6>
                <span className="icon">{props.icon}</span>
                <span>{props.position}</span>
              </h6>
              <p>
                <span className="icon">
                  <FaHeart />
                </span>
                <span>{props.love}</span>
              </p>
            </div>

            <a href={props.twitter} target="_blank" rel="noreferrer">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  thumb: PropTypes.string.isRequired,
  emoji: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  position: PropTypes.string.isRequired,
  love: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
};

export default Card;
