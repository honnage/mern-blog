import React from 'react'
import { api } from "../../../../lib/constants"
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function CarouselItem() {
    return (
        <>
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
        </>
    )
}
