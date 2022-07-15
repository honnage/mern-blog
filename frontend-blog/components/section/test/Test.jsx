// import React from "react";
import Blog from "./components/Blog";
import axios from 'axios';
import { useState, useEffect, React} from "react";

export default function TestBlogList() {
  // console.log(process.env.API_HOST)
  // let apiURL = process.env.API_HOST + "/categories"
  // console.log(apiURL)
  // axios.get(apiURL).then((response) => {
  //   console.log(response.data);
  // });

  axios.get('http://localhost:1337/api/categories').then((response) => {
    response = response.data
    console.log('response',response.data);
  });


  return (
    <>

      {/* ======= About Us Section ======= */}
      <section id="about">
        <div className="container" data-aos="fade-up">
          <header className="section-header">
            <h3>Wonder Blog</h3>
            {response}

            <p>ไม่พลาดทุกข่าวสารการลงทุนและสาระน่ารู้ในการใช้บริการ</p>
          </header>
          <div className="row about-cols">
           <Blog />
           <Blog />
           <Blog />

          </div>
        </div>
      </section>
      {/* End About Us Section */}
    </>
  );
};

