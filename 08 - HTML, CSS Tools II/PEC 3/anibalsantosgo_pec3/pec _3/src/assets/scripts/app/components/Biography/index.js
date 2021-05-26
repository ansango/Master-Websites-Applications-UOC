import React from "react";
import biography from "../../data/biography";
const Biography = () => {
  return <div className="biography">{bio}</div>;
};
export default Biography;

const bio = biography.map((item, key) => <h3 key={key}>{item}</h3>);
