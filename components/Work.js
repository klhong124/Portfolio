
import React, { useRef, useState } from "react";
import Icon from '@mdi/react'

import { mdiChevronLeftBoxOutline, mdiChevronRightBoxOutline } from '@mdi/js';


const work = () => {
    const slide = useRef(null)
    const job = [
        {
            name: "Gymism Club",
            img: "https://ryankwan.netlify.app/img/gymism.png",
            link: "https://www.gymism.club/",
            year: 2021,
            desc:
                "A web application for downloading stickers from Sticker Cloud.",
            tags: [
                "Nuxt",
                "Vue",
                "Firebase",
                "PWA",
                "ApolloGrahpQL",
                "Stripe",
                "JAMstack",
                "Cloud Run",
            ],
        },
        {
            name: "Sticker Cloud Downloader",
            img: "https://ryankwan.netlify.app/img/sc_downloader.png",
            link: "https://sticker-cloud-downloader.netlify.app/",
            year: 2021,
            desc:
                "A web application for downloading stickers from Sticker Cloud.",
            tags: ["Nuxt", "Vue", "Google Analytics", "Proxy", "JSzip"],
        },
        {
            name: "Car8",
            img: "https://ryankwan.netlify.app/img/car8.png",
            link: "https://www.car8.com/",
            year: 2020,
            desc: "A used-car trading platform made of Vue and Laravel.",
            tags: [
                "Laravel",
                "Vue",
                "UBA",
                "Stripe Payment",
                "Vuex",
                "SQL",
                "Python OCR",
            ],
        },
        {
            name: "IPCC",
            img: "https://ryankwan.netlify.app/img/ipcc.png",
            link: "https://www.ipcc.gov.hk/symposium2019/view/index.html",
            year: 2019,
            desc: "An event website made of pure HTML and CSS.",
            tags: ["HTML", "CSS", "Graphic Design", "AOS Animation"],
        },
        {
            name: "Facebook Add Friends Bot",
            img: "https://ryankwan.netlify.app/img/facebook.png",
            year: 2018,
            desc:
                "An application that automatically login to Facebook and sends friend requests to the others. With a function to remove all friend requests as well.",
            tags: ["Java", "Selenium", "Web Scraping"],
        },
    ]

    return (
        <div>
            <div className="flex">
                <div className="bg-gradient-to-r from-background via-background h-screen  w-[min(200px,32vw)] absolute" />
                <div
                    className="max-w-0"
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >

                    <svg className="w-screen mt-[600px] max-w-xl  -rotate-90 origin-top-left ml-4 "
                        viewBox="0 0 320 90"><text x="50%" y="90%" text-anchor="middle">WORK</text></svg>
                </div>

                <div className="w-full">
                    <div className="flex slide-group__wrapper py-8" ref={slide}>
                        {job.map(({ name, img, link, year, desc, tags }) =>
                            <div className="card" >
                                <img src={img} onClick={() => window.open(link)}
                                    className="w-full h-[200px] object-cover cursor-pointer" />
                                <div className="py-4 px-10 text-white">

                                    <h1 className="text-xl font-bold">{name} - {year}</h1>

                                    <p className="text-gray">{desc}</p>
                                    {tags.map((tag) =>
                                        <span className="tag">
                                            {tag}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className=" w-screen mt-5 pl-[min(155px,26vw)]">
                        <div className="flex justify-between w-1/2 max-w-[800px] mx-auto">

                            <button onClick={() => { slide.current.scrollLeft -= 300 }}>
                                <Icon path={mdiChevronLeftBoxOutline}
                                    size={3}
                                    color="white" />
                            </button>

                            <button onClick={() => { slide.current.scrollLeft += 300 }}>
                                <Icon path={mdiChevronRightBoxOutline}

                                    size={3}
                                    color="white" />
                            </button>


                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default work

