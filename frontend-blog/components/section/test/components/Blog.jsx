import React from "react";

export default function Blog() {


  return (
    <>
      <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="about-col">
          <div className="img">
            <img
              src="assets/img/about-mission.jpg"
              alt="x"
              className="img-fluid"
            />
          </div>
          <h2 className="title">
            <a href="#">Our Mission</a>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </>
  );
}
