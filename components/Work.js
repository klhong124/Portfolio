
import React, { useRef, useState } from "react";

const work = () => {
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
                <div
                    className="max-w-0 mt-10 "
                    data-aos="fade-up"
                    data-aos-duration="3000"
                >
                    <svg className="w-screen ml-4 mt-[600px] max-w-xl -rotate-90 origin-top-left "
                        viewBox="0 0 320 90"><text x="50%" y="90%" text-anchor="middle">WORK</text></svg>
                </div>

                <div>
                    <div className="flex slide-group__wrapper ml-[min(150px,26vw)]">
                        {job.map(({ name, img, link, year, desc, tags }) =>
                            <div className="card" >
                                <h1>{name} - {year}</h1>
                                <img src={img} onClick={() => window.open(link)} />
                                <p>{desc}</p>
                                {tags.map((tag) =>
                                    <div className="tag">
                                        {tag}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    <div className=" w-screen mt-10 pl-[min(150px,26vw)]">
                        <div className="text-red-300 bg-red-50 flex justify-between w-1/2 mx-auto">
                            <span>left</span>
                            <span>right</span>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default work

