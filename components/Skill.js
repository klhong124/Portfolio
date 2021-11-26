import { useRef, useState } from 'react'

const skill = () => {
    const circle = useRef(null)
    const title = useRef(null)
    const cards = useRef(null)
    const handleMouseMove = ({ nativeEvent: { clientX, clientY } }) => {
        //circle
        // console.log(screen.scrollY);
        circle.current.style.top = clientY + "px"
        circle.current.style.left = clientX + "px"
        let x = ((clientX - (window.innerWidth / 2)) / window.innerWidth * 2).toFixed(2)
        let y = (((window.innerHeight / 2) - clientY) / window.innerHeight * 2).toFixed(2)

        // title
        title.current.style.top = y * 25 + "px"
        title.current.style.right = x * 50 + "px"
        // card 
        cards.current.style.marginTop = y * 25 + "px"
        cards.current.style.marginRight = x * 50 + "px"

    }
    const handleMouseLeave = () => {
        // hide circle
        circle.current.style.left = "-500px"
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
        <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} onMouseEnter={handleMouseMove}>
            <div ref={circle} className="absolute circle"></div>

            <div ref={title} className="absolute mt-5 transition-all ease-out right-0 top-0">
                <svg className="w-[clamp(400px,130vw,2500px)]" viewBox="0 0 800 90"><text x="50%" y="90%">SKILLS</text></svg>
            </div>
            <div className="flex justify-center items-center my-[100px] lg:mt-0">
                <div className=" w-2/3 max-w-6xl h-full flex justify-center items-center gap-10 lg:flex-row flex-col" ref={cards}>
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

