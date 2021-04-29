import React from "react";
import Contact from "../Contact/";

export default () => {
  const hideToast = () => {
    let toast = document.getElementById("toast");
    toast.className = "toast align-items-center text-white bg-primary border-0";
  };
  const toast = (
    <div
      id="toast"
      className="toast show align-items-center text-white bg-primary"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div
          className="toast-body"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Send us a mail
        </div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
          onClick={hideToast}
        ></button>
      </div>
    </div>
  );

  const modal = (
    <div className="component_modal">
      <div className="wrapper-button">{toast}</div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">say what you like</h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return modal;
};
