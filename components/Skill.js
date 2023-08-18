import { useRef, useState, forwardRef, useImperativeHandle } from 'react'

import gsap from "gsap";

const skill = forwardRef((_, ref) => {
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
            title.current.style.top = y * 10 + 20 + "px"
            if (window.innerWidth > 640) {
                title.current.style.right = x * 40 + 20 + "px"
            } else {
                title.current.style.right = "20px"
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
            blob.current.style.top = y + "%"
        }
    }
    const handleMouseLeave = () => {
        // hide circle
        circle.current.style.opacity = 0;
    }
    useImperativeHandle(
        ref,
        () => ({
            toggleEffect() {
                gsap.fromTo(blob.current, {
                    opacity: 0,
                    scaleX: 2.5, scaleY: 2.5, transformOrigin: "center",
                }, {
                    duration: 1.5,
                    ease: "bounce",
                    opacity: 1,
                    scaleX: 1.1,
                    scaleY: 1.1,
                    delay: 0.2,
                });
            }, cancelEffect() {
                gsap.to(blob.current, {
                    duration: 1.7,
                    opacity: 0,
                    ease: "out",
                });
            }
        }),
        [],
    )

    const skills = {
        programing: [
            `Javascript / Node.js`,
            `Typescript`,
            `Vue / Nuxt.js`,
            `Pinia`,
            `React / Next.js`,
            `Storybook`,
            `Tailwind CSS`,
            `Sass / Scss`,
            `ApolloGraphQL`,
            `Python`,
            `OCR`,
            `Selenium`,
            `Web Scraping`,
            `SQL`,
            `php / Laravel`,
            `MongoDB`,
            `Serverless / Functions`,
            `AWS / Google Cloud / Firebase`,
            `Stripe`,
            `Twilio`,
            `Shopify`,
            `GSAP`,
            `Three.js`,
            `jQuery`,
            `EJS`,
            `Arduino`,
            `Cypress.js`,
            `Jest`,
            `Processing`,
        ],
        design: [
            `Figma`,
            `UX Design`,
            `PhotoShop`,
            `Illustrator`,
            `After Effect`,
            `Animation`,
            `Motion Graphics`,
            `Davinci Resolve`,
            `Premiere Pro`,
            `Basic 3D Modeling`,
            `Photography`
        ]
    }
    return (
        <div>

            <div onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="cursor-none min-h-screen">
                <div ref={circle} className="absolute circle"></div>



                <div className="grid place-items-center min-h-screen relative">

                    <div ref={title} className="absolute top-5 -right-0 sm:right-5">
                        <svg className="w-[clamp(800px,130vw,2500px)]" viewBox="0 0 800 90"><text x="100%" y="90%" textAnchor="end">SKILLS</text></svg>
                    </div>

                    <div className="sm:w-2/3 max-w-6xl my-[120px] sm:my-0 flex justify-center items-center gap-10 lg:flex-row flex-col" ref={cards}>
                        {

                            Object.entries(skills).map(([type, skill]) => {
                                return (
                                    <div className="card p-10" key={type} >
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
            {/* background */}
            <div className="bg-blob-pattern pattern top-0 transform scale-110 opacity-0 h-full" ref={blob}></div>

        </div >

    )

})

export default skill

