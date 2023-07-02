import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import Navbar from '../components/App/Navbar'
import Footer from '../components/App/footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

<title>Nicat-dcw | Developer</title>
<meta name="title" content="Nicat-dcw | Developer" />
<meta name="description" content="Developer from Azerbaijan. Loves Coding and Drinking coffe." />

<meta property="og:type" content="website" />
<meta property="og:url" content="https://www.nicat-dcw.me/" />
<meta property="og:title" content="Nicat-dcw | Developer" />
<meta property="og:description" content="Developer from Azerbaijan. Loves Coding and Drinking coffe." />

<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:url" content="https://www.nicat-dcw.me/" />
<meta property="twitter:title" content="Nicat-dcw | Developer" />
<meta property="twitter:description" content="Developer from Azerbaijan. Loves Coding and Drinking coffe." />

<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Handlee&display=swap" rel="stylesheet"/>
        
<ThemeProvider attribute="class" enableSystem={false}>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
</ThemeProvider>
    </>  
  )
}

export default MyApp
