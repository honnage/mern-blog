import React, { useState, useEffect } from "react";
import { api } from "../../../../lib/constants"
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function CarouselItem() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(api.LOCALHOST + "/api/section-carousels")
            .then((res) => res.json())
            .then((result) => {
                setItems(result.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    return (
        <>
            {items.map((item) => (
                <div
                    key={item.id}
                    className="carousel-item"
                    style={{
                        backgroundImage: "url(assets/img/hero-carousel/5.jpg)",
                    }}
                >
                    <div className="carousel-container">
                        <div className="container">
                            <h2 className="animate__animated animate__fadeInDown">
                               {item.attributes.title}
                            </h2>
                            <p className="animate__animated animate__fadeInUp">
                                {item.attributes.title}
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
            ))}
        </>
    )
}