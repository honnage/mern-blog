import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        const initialProps = await Document.getInitialProps(ctx)

        return initialProps
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charset="utf-8" />
                    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
                    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}

                    <title>BizPage Bootstrap Template</title>

                    <meta content="" name="description" />
                    <meta content="" name="keywords" />

                    <link href="assets/img/favicon.png" rel="icon" />
                    <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

                    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i|Montserrat:300,400,500,700" rel="stylesheet" />

                    <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
                    <link href="assets/vendor/aos/aos.css" rel="stylesheet" />
                    <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                    <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                    {/* <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" /> */}

                    <link href="assets/css/style.css" rel="stylesheet" />

                    <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet"  />
                    <link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script src="assets/vendor/purecounter/purecounter.js"></script>
                    <script src="assets/vendor/aos/aos.js"></script>
                    <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
                    <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
                    <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
                    <script src="assets/vendor/waypoints/noframework.waypoints.js"></script>
                    <script src="assets/vendor/php-email-form/validate.js"></script>

                </body>
            </Html>
        );
    }
}

export default MyDocument;