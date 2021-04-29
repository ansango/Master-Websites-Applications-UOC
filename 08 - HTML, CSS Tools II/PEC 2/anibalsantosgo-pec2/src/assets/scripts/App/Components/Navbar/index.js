import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light container-lg py-5 fw-bold">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <code className="text-primary">{"!"}</code>
          {"undefined"}
        </Link>
        <button
          className="navbar-toggler border-white "
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <code className="fs-3 fw-bold text-primary">!==</code>
        </button>

        <div
          className="d-md-flex justify-content-end collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/band">
                {"band"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/news">
                {"news"}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-primary" to="/tour">
                {"tour"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
