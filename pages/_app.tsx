import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/App/Navbar'
import Footer from '../components/App/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet"/>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </>  
  )
}

export default MyApp
