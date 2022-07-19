import React, { useState, useEffect } from "react";
import { api } from "../../../../lib/constants";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function Blog() {
  // const [attractions, setAttractions] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(api.LOCALHOST + "/api/articles?populate=cover_image")
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
        <div className="col-md-4" data-aos="fade-up" data-aos-delay={100 * (item.id * 1) } key={item.id}>
          <div className="about-col">
            <div className="img" >
              <img
                src={
                  api.LOCALHOST +
                  item.attributes.cover_image.data.attributes.url
                }
                style={{ height: "400px", width: "100%" }}
                alt="x"
                className="img-fluid"
              />
            </div>

              <h2 className="title">
                <a href="#">
                  <ReactMarkdown
                    children={item.attributes.name}
                    rehypePlugins={[rehypeRaw]}
                  />
                </a>
              </h2>
              <p className="text-truncate">{item.attributes.detail}</p>
            </div>
          </div>
      ))}
    </>
  );
}
