import React from "react";
import Banner from "../components/Banner";
import Hero from "../components/Hero";

const title = "A BEAT BAND";
const center = "text-center";

const Home = () => {
  return (
    <div className="view">
      <Banner title={title} position={center} isCode />
      <Hero />
    </div>
  );
};

export default Home;
