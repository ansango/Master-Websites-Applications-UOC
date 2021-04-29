import React from "react";
const Parallax = (props) => {
  let vNewsTitle = (
    <div className="row">
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <h1>{"Let's play"}</h1>
        <h3>{props.title}</h3>
      </div>
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
        <code className="logo">{"!=="}</code>
      </div>
    </div>
  );
  let vNewsSocial = (
    <div className="text-white">
      <div className="row py-4">
        <h2 className="text-center">{props.socialTitle}</h2>
      </div>
      <div className="row py-4">
        <div className="col-md-6 pb-4">
          <ol>
            {props.tracks &&
              props.tracks.map((track, index) => {
                return (
                  <li key={index} id={`track-${index}`}>
                    <div className="track-data">
                      <small className="me-2">{index + 1}</small>
                      <span className="me-2">{"-"}</span>
                      <strong className="me-2">{track.name}</strong>
                      <span className="me-2">{"-"}</span>
                      <small className="me-2">{track.duration}</small>
                    </div>
                    <div className="track-options">
                      <span>
                        <i className="fas fa-play me-2"></i>
                      </span>
                      <span>
                        <i className="fas fa-info-circle me-2"></i>
                      </span>
                    </div>
                  </li>
                );
              })}
          </ol>
        </div>
        <div className="col-md-6 social pb-4">
          <div>
            <i className="fab fa-spotify"></i>
            <i className="fab fa-apple"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <div>
            <i className="fab fa-google-play"></i>
            <i className="fab fa-xbox"></i>
            <i className="fab fa-soundcloud"></i>
          </div>
        </div>
      </div>
    </div>
  );
  let vTourTitle = (
    <div className="row text-center text-sm-end">
      <h1>{props.title}</h1>
    </div>
  );
  let parallax = (
    <div
      className="parallax d-flex align-items-center"
      style={{
        backgroundImage: `url(${props.img})`,
        minHeight: `${props.height}px`,
      }}
    >
      <div className="container">
        {props.isTitle && vNewsTitle}
        {props.isSocial && vNewsSocial}
        {props.isTour && vTourTitle}
      </div>
    </div>
  );
  return parallax;
};

export default Parallax;
