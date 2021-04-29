import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="component_footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 item text mb-5 order-md-3">
            <h3 className="h6 mb-2">
              <code>{"!"}</code>
              {"undefined"}
            </h3>
            <p>
              {
                "We are not undefined an electronic collective from Berlin,Germany. We make noise and beautiful things. For bookings or any other information you can send us an email to:"
              }
            </p>
            <p>
              <a className="primary" href="mailto:info@notundefined.com">
                {"info@notundefined.com"}
              </a>
            </p>
          </div>
          <div className="col-sm-6 col-md-3 item text mb-5 order-md-1 streaming">
            <h3 className="h6 mb-2">{"Streaming"}</h3>
            <p>
              <a href="/#">
                <i className="icon fab fa-spotify"></i>
                <span>{"Spotify"}</span>
              </a>
            </p>
            <p>
              <a href="/#">
                <i className="icon fab fa-apple"></i>
                <span>{"Apple Music"}</span>
              </a>
            </p>
            <p>
              <a href="/#">
                <i className="icon fab fa-youtube"></i>
                <span>{"Youtube Music"}</span>
              </a>
            </p>
          </div>
          <div className="col-sm-6 col-md-3 item text mb-5 order-md-2">
            <h3 className="h6 mb-2">{"Next date"}</h3>
            <p>{"Saturday 02 September 2021"}</p>
            <p>{"Kindl-Bühne Wuhlheide, Berlin, Germany"}</p>
            <Link className="text-primary" to="/tour">
              {"Checkout all new dates!"}
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-3 mb-3 brand">
            <Link to="/">
              <code>{"!"}</code>
              {"undefined"}
            </Link>
          </div>
          <div className="col-12 col-sm-6 mb-3 navigation">
            <ul>
              <li>
                <Link to="/band">{"band"}</Link>
              </li>
              <li>
                <Link to="/news">{"news"}</Link>
              </li>
              <li>
                <Link to="/tour">{"tour"}</Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-3 mb-3 social-network">
            <a href="/#">
              <i className="icon fab fa-facebook"></i>
            </a>
            <a href="/#">
              <i className="icon fab fa-twitter"></i>
            </a>
            <a href="/#">
              <i className="icon fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
