import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="component_hero">
      <div className="item item1"></div>
      <div className="item item2"></div>

      <Link className="item item3 nav-link" to="/tour">
        <h3>TOUR</h3>
      </Link>

      <div className="item item4">
        <h3>A</h3>
      </div>
      <div className="item item5">
        <h3>BEAT</h3>
      </div>
      <div className="item item6">
        <h3>BAND</h3>
      </div>
      <Link className="item item7 nav-link" to="/news">
        <h3>NEWS</h3>
      </Link>
      <div className="item item8"></div>
      <div className="item item9"></div>
    </section>
  );
};

export default Hero;
