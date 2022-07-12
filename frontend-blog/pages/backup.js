import Head from 'next/head'
import Script from 'next/Script'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/testLayout'
import BackupContent from '../components/content/backupContent'

export default function Home() {
    return (
        <>
            <Head>
                <title>Backup - page</title>
            </Head>

            <Layout>
                <BackupContent />
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