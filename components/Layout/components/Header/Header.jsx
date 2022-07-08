import React from "react";

export default function Header() {
  return (
    <>
      <header
        id="header"
        className="fixed-top d-flex align-items-center header-transparent"
      >
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-xl-11 d-flex align-items-center justify-content-between">
              <h1 className="logo">
                <a href="index.html">BizPage</a>
              </h1>

              <nav id="navbar" className="navbar">
                <ul>
                  <li>
                    <a className="nav-link scrollto active" href="#hero">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#services">
                      Services
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto " href="#portfolio">
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="nav-link  " href="blog.html">
                      Blog
                    </a>
                  </li>
                  <li className="dropdown">
                    <a href="#">
                      <span>Drop Down</span>{" "}
                      <i className="bi bi-chevron-down"></i>
                    </a>
                    <ul>
                      <li>
                        <a href="#">Drop Down 1</a>
                      </li>
                      {/* <li className="dropdown">
                        <a href="#">
                          <span>Deep Drop Down</span>{" "}
                          <i className="bi bi-chevron-right"></i>
                        </a>
                        <ul>
                          <li>
                            <a href="#">Deep Drop Down 1</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 2</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 3</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 4</a>
                          </li>
                          <li>
                            <a href="#">Deep Drop Down 5</a>
                          </li>
                        </ul>
                      </li> */}
                      <li>
                        <a href="#">Drop Down 2</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 3</a>
                      </li>
                      <li>
                        <a href="#">Drop Down 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="nav-link scrollto" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
                <i className="bi bi-list mobile-nav-toggle"></i>
              </nav>
            </div>
          </div>
        </div>
      </header>

      <section id="hero">
        <div className="hero-container">
          <div
            id="heroCarousel"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-bs-interval={5000}
          >
            <ol id="hero-carousel-indicators" className="carousel-indicators" />
            <div className="carousel-inner" role="listbox">
              <div
                className="carousel-item active"
                style={{
                  backgroundImage: "url(assets/img/hero-carousel/1.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      We are professional
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(assets/img/hero-carousel/2.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      At vero eos et accusamus
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Nam libero tempore, cum soluta nobis est eligendi optio
                      cumque nihil impedit quo minus id quod maxime placeat
                      facere possimus, omnis voluptas assumenda est, omnis dolor
                      repellendus. Temporibus autem quibusdam et aut officiis
                      debitis aut.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(assets/img/hero-carousel/3.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Temporibus autem quibusdam
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Beatae vitae dicta sunt explicabo. Nemo enim ipsam
                      voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt omnis iste natus error sit
                      voluptatem accusantium.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(assets/img/hero-carousel/4.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Nam libero tempore
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                      amet, consectetur, adipisci velit, sed quia non numquam
                      eius modi tempora incidunt ut labore et dolore magnam
                      aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                      nostrum.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item"
                style={{
                  backgroundImage: "url(assets/img/hero-carousel/5.jpg)",
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      Magnam aliquam quaerat
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <a
                      href="#featured-services"
                      className="btn-get-started scrollto animate__animated animate__fadeInUp"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#heroCarousel"
              role="button"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon bi bi-chevron-left"
                aria-hidden="true"
              />
            </a>
            <a
              className="carousel-control-next"
              href="#heroCarousel"
              role="button"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon bi bi-chevron-right"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </section>




    </>
  );
}
