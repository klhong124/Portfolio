import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/main.css'
import Script from 'next/script'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <div>
    <Script
      src="https://www.googletagmanager.com/gtag/js?id=G-NK426M59VD"
      strategy="afterInteractive"
    />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-NK426M59VD');
        `}
    </Script>

    <Component {...pageProps} />
  </div>
}

export default MyApp
