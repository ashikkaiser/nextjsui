
import "../assets/css/font-icons.css";
import "../assets/css/plugins.css";
import "../assets/css/style.css";
import "../assets/css/responsive.css";
import $ from "jquery"

import Script from "next/script";




function MyApp({ Component, pageProps }) {



  return (
    <>
      <div className="quarter-overlay">
        <div className="cv-spinner">
          <span className="spinner"></span>
        </div>
      </div>
      <div className="page-wrapper">
        <Component {...pageProps} />
      </div>

      <Script
        id="plugin"
        // strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: process.env.rawJsFromFile,
        }}
      />
      {/* <Script
        id="mainxxx"
        // strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: process.env.rawJsFromFileMain,
        }}
      /> */}
      {/* <Script
        id="stripe-js"
        src="/assets/js/plugins.js"
        strategy="beforeInteractive"
      /> */}
      {/* <Script
        id="stripe-jsx"
        src="/assets/js/main.js"
        strategy="beforeInteractive"

      /> */}
    </>
  );
}

export default MyApp;
