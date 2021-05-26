import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaApple,
  FaFacebook,
  FaInstagram,
  FaSpotify,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const BlockOne = () => (
  <div className="block-one">
    <div className="description">
      <h4>
        <code>{description.code}</code>
        {description.h4}
      </h4>
      <p>{description.p}</p>
      <a href="mailto:info@notundefined.com">{description.a}</a>
    </div>
    <div className="streaming">
      <h4>{streaming.h4}</h4>
      <a href="/#">
        <FaSpotify />
        <span>{streaming.spotify}</span>
      </a>
      <a href="/#">
        <FaApple />
        <span>{streaming.apple}</span>
      </a>
      <a href="/#">
        <FaYoutube />
        <span>{streaming.yt}</span>
      </a>
    </div>
    <div className="dates">
      <h4>{dates.h4}</h4>
      <p>{dates.p1}</p>
      <p>{dates.p2}</p>
      <NavLink className="text-primary" to="/tour">
        {dates.link}
      </NavLink>
    </div>
  </div>
);

export const BlockTwo = () => (
  <div className="block-two">
    <div className="band">
      <NavLink to="/">
        <code>{band.code}</code>
        {band.title}
      </NavLink>
    </div>
    <div className="entities">
      <ul>
        <li>
          <NavLink to="/band">{band.link1}</NavLink>
        </li>
        <li>
          <NavLink to="/tour">{band.link2}</NavLink>
        </li>
      </ul>
    </div>
    <div className="social">
      <a href="/#">
        <FaFacebook />
      </a>
      <a href="/#">
        <FaTwitter />
      </a>
      <a href="/#">
        <FaInstagram />
      </a>
    </div>
  </div>
);

const description = {
  code: "!",
  h4: "undefined",
  p:
    "We are not undefined an electronic collective from Berlin, Germany. We make noise and beautiful things. For bookings or any other information you can send us an email to:",
  a: "info@notundefined.com",
};

const streaming = {
  h4: "Streaming",
  spotify: "Spotify",
  apple: "Apple",
  yt: "youtube",
};

const dates = {
  h4: "Next date",
  p1: "Kindl-Bühne Wuhlheide, Berlin, Germany",
  p2: "Saturday 02 September 2021",
  link: "Checkout all new dates!",
};

const band = {
  code: "!",
  title: "undefined",
  link1: "band",
  link2: "tour",
};
