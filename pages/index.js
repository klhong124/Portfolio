import Head from 'next/head'
import Home from '/components/Home.js'
import About from '/components/About.js'
import ReactFullpage from '@fullpage/react-fullpage';



const index = () => {


  return (
    <div>
      <Head>
        <title>Ryan Kwan</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="dark bg-background">
        <ReactFullpage
          scrollOverflow={true}
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
                  <h3>Section 3</h3>
                  <button onClick={() => fullpageApi.moveTo(1, 0)}>
                    Move top
                  </button>
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

