import Head from 'next/head'
import Home from '/components/Home.js'
import About from '/components/About.js'
import Work from '/components/Work.js'
import Skill from '/components/Skill.js'
import Contact from '/components/Contact.js'
import ReactFullpage from '@fullpage/react-fullpage';
import React, { useEffect, useRef } from "react";
import $ from 'jquery';



const index = () => {
  const about = useRef(null)
  useEffect(() => {
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
        about.current.toggleEffect()
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
                  <Skill />
                  {/* <Home OnClickStarted={() => fullpageApi.moveTo(2)} /> */}
                </div>
                <div className="section">
                  <About ref={about} />
                </div>
                <div className="section" >
                  {/* <Skill /> */}
                </div>
                <div className="section">
                  <Work />
                </div>
                <div className="section">
                  <Contact />
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

