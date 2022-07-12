import Layout from '../components/layout/testLayout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
      <Component {...pageProps} />
    // </Layout>
  )
}

export default MyApp
