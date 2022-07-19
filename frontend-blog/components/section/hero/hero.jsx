import React, { useState, useEffect } from "react";
import { api } from "../../../lib/constants";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Hero() {
  const [API_data_1, setData] = useState([]);

  useEffect(() => {
    fetch(api.LOCALHOST + "/api/section-carousels/1?populate=cover_image")
      .then((res) => res.json())
      .then((result) => {
        setData(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const img = "http://localhost:1337/uploads/bg2_288f3e6648.jpg";

  return (
    <>
      {/* ======= Hero Us Section ======= */}
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
                  // backgroundImage: `url('${api.LOCALHOST + API_data_1.attributes?.cover_image.data.attributes.url}')`,
                  backgroundImage: `url('${ api.LOCALHOST + API_data_1.attributes?.cover_image.data.attributes.url}')`,
                }}
              >
                <div className="carousel-container">
                  <div className="container">
                    <h2 className="animate__animated animate__fadeInDown">
                      {API_data_1.attributes?.title}
                    </h2>
                    <p className="animate__animated animate__fadeInUp">
                      {API_data_1.attributes?.description}
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
      {/* End Hero Us Section */}
    </>
  );
}
