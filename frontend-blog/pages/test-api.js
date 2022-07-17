import Head from 'next/head'
import Script from 'next/Script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LayoutBlog from '../components/layout/testLayoutBlog'
import Breadcrumbs from '../components/section/breadcrumbs/Breadcrumbs'
import { useState, useEffect } from "react"
import { api } from "../lib/constants"
import ReactMarkdown from "react-markdown";


export default function Home() {
    const [attractions, setAttractions] = useState([]);
    useEffect(() => {
        fetch(api.LOCALHOST + "/api/articles/2?populate=cover_image")
            .then((res) => res.json())
            .then((result) => {
                setAttractions(result.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    console.log(attractions)


    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta content="width=device-width, initial-scale=1.0" name="viewport" />

                <title>Test</title>

                <meta content="" name="description" />
                <meta content="" name="keywords" />
            </Head>

            <LayoutBlog>
                <Breadcrumbs />

                <section className='container'>

                    <div >
                        {attractions.attributes?.name}
                    </ div>
                    <hr />
                    <br />

                    <p>dangerouslySetInnerHTML</p>
                    <div dangerouslySetInnerHTML={{ __html: attractions.attributes?.content }} />

                    <hr />
                    <p>ReactMarkdown</p>
                    <ReactMarkdown >{attractions.attributes?.content}</ReactMarkdown>
                    <br />


                </section>

            </LayoutBlog>


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
