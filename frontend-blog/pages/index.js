import Head from 'next/head'
import Script from 'next/Script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout/layout'
import Hero from '../components/section/hero/Hero'
import FeaturedServices from '../components/section/featuredServices/featuredServices'
import About from '../components/section/about/about'
import Services from '../components/section/services/services'
import CallToAction from '../components/section/callToAction/callToAction'
import Skills from '../components/section/skills/skills'
import Facts from '../components/section/facts/facts'
import Portfolio from '../components/section/portfolio/portfolio'
import Clients from '../components/section/clients/clients'
import Testimonials from '../components/section/testimonials/testimonials'
import Team from '../components/section/team/team'
import Contact from '../components/section/contact/contact'
import BlogList from '../components/section/blogList/BlogList'

import React, { useEffect, useState } from 'react'
import Loading from '../components/pagination/loading'

import Header from '../components/layout/Header/header'
import BackToTop from '../components/buttom/BackToTop'
import SpeedDialMenu from '../components/buttom/SpeedDialMenu'
import Footer from '../components/layout/Footer/footer'

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(false);
      const res = await fetch(
        'http://localhost:1337/api/section-carousels/?populate=cover_image',
      );
      const json = await res.json();
      setData(json.data);
      setIsLoading(true);
      // console.log(json.data)
      // console.log(isLoading)
    };
    fetchData();
  }, [setData]);

  return (
    <>
      <Head>
        <title>Index - page</title>
      </Head>

      <Layout>
        <Hero />
        <FeaturedServices />
        <BlogList test={isLoading} />
        <Services />
        <CallToAction />
        <Skills />
        <Facts />
        <Portfolio />
        <Clients />
        <Testimonials />
        <Team />
        <Contact msg="msg" />
      </Layout>

      <Script src="assets/vendor/purecounter/purecounter.js"></Script>
      <Script src="assets/vendor/aos/aos.js"></Script>
      <Script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
      <Script src="assets/vendor/glightbox/js/glightbox.min.js"></Script>
      <Script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></Script>
      <Script src="assets/vendor/swiper/swiper-bundle.min.js"></Script>
      <Script src="assets/vendor/waypoints/noframework.waypoints.js"></Script>
      <Script src="assets/vendor/php-email-form/validate.js"></Script>

      <Script src="https://unpkg.com/aos@next/dist/aos.js"></Script>
      <Script>
        AOS.init();
      </Script>

      <Script src="assets/js/main.js"></Script>
    </>
  )
}
