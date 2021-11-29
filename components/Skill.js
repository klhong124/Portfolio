import { useRef, useState } from 'react'

const skill = () => {
    const blob = useRef(null)
    const circle = useRef(null)
    const title = useRef(null)
    const cards = useRef(null)
    const handleMouseMove = ({ nativeEvent: { clientX, clientY } }) => {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent)) {
            //circle
            circle.current.style.top = clientY + "px"
            circle.current.style.left = clientX + "px"
            circle.current.style.opacity = 1;
            let x = ((clientX - (window.innerWidth / 2)) / window.innerWidth * 2).toFixed(2)
            let y = (((window.innerHeight / 2) - clientY) / window.innerHeight * 2).toFixed(2)

            // title
            title.current.style.top = y * 25 + "px"
            if (window.innerWidth > 640) {
                title.current.style.right = x * 55 + "px"
            } else {
                title.current.style.right = "0px"
            }
            // card 
            cards.current.style.marginTop = y * 10 + "px"
            if (window.innerWidth > 640) {
                cards.current.style.marginRight = x * 15 + "px"
            } else {
                cards.current.style.marginRight = "0px"
            }
            // background
            blob.current.style.left = -x + "%"
            blob.current.style.top = -y + "%"

        }


    }
    const handleMouseLeave = () => {
        // hide circle
        circle.current.style.opacity = 0;
    }

    const skills = {
        programing: [
            `Javascript / Node.js`,
            `Vue / Nuxt.js`,
            `React / Next.js`,
            `ApolloGraphQL`,
            `Python`,
            `Python OCR`,
            `Selenium`,
            `Web Scraping`,
            `SQL`,
            `php / Laravel`,
            `MongoDB`,
            `Serverless / Functions`,
            `AWS / Google Cloud / Firebase`,
            `Stripe`,
            `Twilio`,
            `Vuetify / Tailwind CSS`,
            `Three.js`,
            `jQuery`,
            `EJS`,
            `Arduino`,
            `Processing`,


        ],
        design: [
            `Figma`,
            `UX Design`,
            `PhotoShop`,
            `Illustrator`,
            `After Effect`,
            `Davinci Resolve`,
        ]
    }
    return (
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseMove} className="cursor-none py-24  bg-crayola min-h-screen">
            <div ref={circle} className="absolute circle"></div>
            {/* background */}
            <div className="bg-blob-pattern pattern top-0" ref={blob}></div>



            <div className="flex justify-center items-center md:mt-[220px] mt-12 relative">
                <div ref={title} className="absolute -mt-24 md:-mt-28 lg:-mt-36 xl:-mt-44 2xl:-mt-60 -mr-12 right-0 top-0">
                    <svg className="w-[clamp(800px,130vw,2500px)]" viewBox="0 0 800 90"><text x="50%" y="90%">SKILLS</text></svg>
                </div>
                <div className="sm:w-2/3 max-w-6xl h-full flex justify-center items-center gap-10 lg:flex-row flex-col" ref={cards}>
                    {

                        Object.entries(skills).map(([type, skill]) => {
                            return (
                                <div className="card p-10" key={type}>
                                    <h1 className="text-4xl mb-5 font-bold capitalize">{type}</h1>
                                    {skill.map((s, i) =>
                                        <span key={i} className="tag">{s}</span>
                                    )}
                                </div>
                            )
                        })

                    }
                </div>
            </div>


        </div >
    )

}

export default skill

