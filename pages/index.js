import Head from 'next/head'
import Home from '/components/Home.js'
import About from '/components/About.js'
import Work from '/components/Work.js'
import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect } from "react";
import $ from 'jquery';



const index = () => {
  const eventBus = require('js-event-bus')();
  useEffect(() => {
    eventBus.emit("loadAbout");

    // fix fullpage.js bug with aos.js
    window.addEventListener('resize', () => {
      setTimeout(() => {
        $('.fp-table.active .aos-init').addClass('aos-animate');
      }, 100);
    })
  }, []);
  const onLeave = (origin, { index }) => {
    // fix fullpage.js bug with aos.js
    $('.section:gt(0)').eq(origin.index - 1).find('[data-aos]').removeClass('aos-animate');
    switch (index) {
      case 1:
        eventBus.emit("loadAbout");
        break;
      default:
        break;
    }

  }

  return (
    <div>
      <Head>
        <title>Ryan Kwan - Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="dark bg-background">
        <ReactFullpage
          scrollOverflow={true}
          onLeave={onLeave}
          afterLoad={() => {
            // fix fullpage.js bug with aos.js
            $('.fp-table.active .aos-init').addClass('aos-animate');
          }}
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                <div className="section">
                  <Home OnClickStarted={() => fullpageApi.moveTo(2)} />
                </div>
                <div className="section">
                  <About />
                </div>
                <div className="section">
                  <Work />
                </div>

              </div>
            );
          }}
        />
      </div>
    </div>

  )
}

export default index

