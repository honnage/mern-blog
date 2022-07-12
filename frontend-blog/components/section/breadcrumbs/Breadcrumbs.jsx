import React from "react";

export default function Breadcrumbs() {
  return (
    <>
      {/* for blog page */}
      {/* ======= Breadcrumbs ======= */}
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <ol>
            <li>
              <a href="index.html">Home</a>
            </li>
          </ol>
          <h2>Blog</h2>
        </div>
      </section>
      {/* End Breadcrumbs */}
    </>
  );
}
