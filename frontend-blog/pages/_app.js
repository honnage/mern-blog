import Layout from '../components/layout/testLayout'
import '../styles/globals.css'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url) => (url === router.asPath) && setTimeout(() =>{setLoading(false)},1000);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading && (<div className='spinner-wrapper'>
    <div className="spinner"></div></div>)
}

function MyApp({ Component, pageProps }) {
  return (
    // <Layout>
    // <Component {...pageProps} />
    // </Layout>

    <><Loading/><Component {...pageProps} /></>
  )
}

export default MyApp
