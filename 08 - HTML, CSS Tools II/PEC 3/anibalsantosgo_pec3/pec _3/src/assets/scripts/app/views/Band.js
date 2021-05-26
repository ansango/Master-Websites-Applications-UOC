import React from "react";
import Banner from "../components/Banner";
import Notes from "../components/Notes";
import Members from "../components/Members";
import Biography from "../components/Biography";

const title = "HELLO WE ARE...";
const center = "text-center";

const Band = () => {
  return (
    <div className="view">
      <Banner title={title} />
      <Notes />
      <Banner title={""} position={center} isCode />
      <Members />
      <Biography />
    </div>
  );
};

export default Band;
