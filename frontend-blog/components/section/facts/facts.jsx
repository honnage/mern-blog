import React from "react";

export default function Facts() {
  return (
    <>
      {/* ======= Facts Section ======= */}
      <section id="facts">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h3>Facts</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque
            </p>
          </header>
          <div className="row counters">
            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="232"
                data-purecounter-duration="1"
                className="purecounter"
              >
                0
              </span>
              <span>
                <p>Clients</p>
              </span>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="421"
                data-purecounter-duration="1"
                className="purecounter"
              >
                0
              </span>
              <span>
                <p>Projects</p>
              </span>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="1364"
                data-purecounter-duration="1"
                className="purecounter"
              >
                0
              </span>
              <span>
                <p>Hours Of Support</p>
              </span>
            </div>

            <div className="col-lg-3 col-6 text-center">
              <span
                data-purecounter-start="0"
                data-purecounter-end="38"
                data-purecounter-duration="1"
                className="purecounter"
              >
                0
              </span>
              <span>
                <p>Hard Workers</p>
              </span>
            </div>
          </div>
          <div className="facts-img">
            <img src="assets/img/facts-img.png" alt="" className="img-fluid" />
          </div>
        </div>
      </section>
      {/* End Facts Section */}
    </>
  );
}
