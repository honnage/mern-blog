import React from "react";
import Blog from "./components/Blog";

export default function BlogList() {
  return (
    <>
      {/* ======= About Us Section ======= */}
      <section id="about" >
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <header className="section-header">
            <h3>Wonder Blog</h3>
            <p>ไม่พลาดทุกข่าวสารการลงทุนและสาระน่ารู้ในการใช้บริการ</p>
          </header>
          <div className="row about-cols">
           <Blog />
          </div>
        </div>
      </section>
      {/* End About Us Section */}
    </>
  );
}
