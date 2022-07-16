import React, { useState, useEffect } from "react";
import { api } from "../../../../lib/constants";
export default function Blog() {
  const [attractions, setAttractions] = useState([])

  useEffect(() => {
    fetch(api.LOCALHOST + '/api/attractions?populate=cover_image')
        .then(res => res.json())
        .then(
            (result) => {
                setAttractions(result.data);
            },
        )
        .catch(function(error) {
            console.log(error);
        });
}, [])
  return (
    <>
      {attractions.map(attraction => (
      <div className="col-md-4" data-aos="fade-up" data-aos-delay={100}>
        <div className="about-col">
          <div className="img">
            <img
              src={api.LOCALHOST + attraction.attributes.cover_image.data.attributes.url}
              alt="x"
              className="img-fluid"
            />
          </div>
          <h2 className="title">
            <a href="#">{attraction.attributes.name}</a>
          </h2>
          <p className="text-truncate">
            {attraction.attributes.detail}
          </p>
        </div>
      </div>
        ))}
    </>
  );
}
