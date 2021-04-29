import React from "react";

const Contact = () => {
  return (
    <div className="container py-2">
      <div className="row">
        <div className="col-12">
          <form name="contact">
            <input type="hidden" name="form-name" value="contact"></input>
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="email" className="form-label">
                  {"Email address"}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                ></input>
              </div>

              <div className="col-12 col-md-6">
                <label htmlFor="name" className="form-label">
                  {"Name"}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name"
                ></input>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <label htmlFor="comment" className="form-label">
                  {"Say something!"}
                </label>
                <textarea
                  className="form-control"
                  id="comment"
                  rows="3"
                ></textarea>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="privacy"
                  ></input>
                  <label className="form-check-label" htmlFor="privacy">
                    {"I agree to the "}
                    <a href="/#" target="_blank" className="text-primary">
                      {"privacy policy"}
                    </a>
                  </label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary text-white"
                  id="liveToastBtn"
                >
                  {"Send"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
