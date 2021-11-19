import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/main.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
