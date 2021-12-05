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
  const skill = useRef(null)
  const contact = useRef(null)
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
    // leave to
    switch (index) {
      case 1:
        about.current.toggleEffect()
        break;
      case 2:
        skill.current.toggleEffect()
        break;
      case 4:
        contact.current.toggleEffect();
        break;
      default:
        break;
    }
    // leave from
    switch (origin.index) {
      case 2:
        skill.current.cancelEffect()
        break;
      case 4:
        contact.current.cancelEffect();
        break;
    }
  }



  const meta = {
    title: "Ryan Kwan - Portfolio",
    description: `Full-Stack Developer | UX Designer -
My aspiration is to deliver exceptional design solutions to address problems and meet people’s actual needs.`,
    image: "/image/meta.png"
  }



  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content="Greetings, I'm Ryan Kwan." />
        <meta name="description" content={meta.description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:image" content={meta.image} />
      </Head>


      <div className="dark bg-crayola">
        <ReactFullpage
          scrollOverflow={true}
          onLeave={onLeave}
          sectionsColor={[null, "#1c363a"]}

          afterLoad={() => {
            // fix fullpage.js bug with aos.js
            $('.fp-table.active .aos-init').addClass('aos-animate');
          }}

          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">

                <div className="section bg-background">
                  <Home OnClickStarted={() => fullpageApi.moveTo(2)} />
                </div>

                <div className="section" >
                  <About ref={about} />
                </div>

                <div className="section z-10" >
                  <Skill ref={skill} />
                </div>

                <div className="section">
                  <Work />
                </div>

                <div className="section bg-viridian">
                  <Contact ref={contact} />
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

