import React from "react";
import braxton from "../../../images/card/Braxton.jpg";
import camille from "../../../images/card/Camille.jpg";
import carla from "../../../images/card/Carla.jpg";
import peter from "../../../images/card/Peter.jpg";
import ryan from "../../../images/card/Ryan.jpg";
import shannon from "../../../images/card/Shannon.jpg";
import {
  FaMusic,
  FaGuitar,
  FaHeartbeat,
  FaRobot,
  FaVideo,
  FaDrum,
  FaGrinTongue,
  FaGrinStars,
  FaGrinHearts,
  FaGrinTears,
  FaSurprise,
  FaLaugh,
} from "react-icons/fa";

export default [
  {
    name: "Shannon",
    position: "Singer",
    thumb: shannon,
    love: "Reading",
    twitter: "https://twitter.com/",
    icon: <FaMusic />,
    emoji: <FaLaugh />,
  },
  {
    name: "Ryan",
    position: "Guitars",
    thumb: ryan,
    love: "Photography",
    twitter: "https://twitter.com/",
    icon: <FaGuitar />,
    emoji: <FaSurprise />,
  },
  {
    name: "Peter",
    position: "Beats",
    thumb: peter,
    love: "Wild life",
    twitter: "https://twitter.com/",
    icon: <FaHeartbeat />,
    emoji: <FaGrinTears />,
  },
  {
    name: "Carla",
    position: "Synth",
    thumb: carla,
    love: "Skating",
    twitter: "https://twitter.com/",
    icon: <FaRobot />,
    emoji: <FaGrinHearts />,
  },
  {
    name: "Camille",
    position: "Content Creator",
    thumb: camille,
    love: "Jazz",
    twitter: "https://twitter.com/",
    icon: <FaVideo />,
    emoji: <FaGrinStars />,
  },
  {
    name: "Braxton",
    position: "Drums",
    thumb: braxton,
    love: "Science",
    twitter: "https://twitter.com/",
    icon: <FaDrum />,
    emoji: <FaGrinTongue />,
  },
];
