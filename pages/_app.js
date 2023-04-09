import '@/styles/globals.css'
import '../public/countdown.css'
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head'
import AOS from 'aos';

import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';

export default function App({ Component, pageProps }) {


  const [splash, setSplash] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />

        <link
          rel="shortcut icon"
          href="favicon.ico"
          type="image/x-icon"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        {/* Primary Meta Tags */}
        <title>API Day 2023</title>
        <meta name="title" content="API Day 2023" />
        <meta
          name="description"
          content="API Day 2023"
        />

        {/* Open Graph / Facebook  */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://api-summit-mumbai.vercel.app/" />
        <meta property="og:title" content="API Day 2023" />
        <meta
          property="og:description"
          content="API Day 2023"
        />
        <meta
          property="og:image"
          content="https://api-summit-mumbai.vercel.app/meta.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        {/* <meta propert="twitter:creator" content="@" /> */}
        <meta property="twitter:url" content="https://api-summit-mumbai.vercel.app/" />
        <meta property="twitter:title" content="API Day 2023" />
        <meta
          property="twitter:description"
          content="API Day 2023"
        />
        <meta
          name="twitter:image:src"
          content="https://api-summit-mumbai.vercel.app/meta.png"
        />
        <meta
          property="twitter:image"
          content="https://api-summit-mumbai.vercel.app/meta.png"
        />
        <title>API Day 2023</title>
      </Head>
      
      <Component {...pageProps} splash={splash} setSplash={setSplash} />
      <Analytics />
    </>
  )
}
