import { useForm } from '@formspree/react';
import Icon from '@mdi/react'
import { mdiGithub, mdiWhatsapp, mdiGmail, mdiLinkedin } from '@mdi/js';
import React, { useRef, forwardRef, useImperativeHandle } from "react";
import gsap from "gsap";


const contact = forwardRef((_, ref) => {
    const blob = useRef(null)

    useImperativeHandle(
        ref,
        () => ({
            toggleEffect() {
                gsap.fromTo(blob.current, {
                    opacity: 0,
                    scaleX: 2.7, scaleY: 2.5, transformOrigin: "center",
                }, {
                    duration: 0.5,
                    ease: "in",
                    opacity: 1,
                    scaleX: 1,
                    scaleY: 1,
                    delay: 0.2,
                });
            },
            cancelEffect() {
                gsap.to(blob.current, {
                    duration: 0.2,
                    opacity: 0,
                    scaleX: 1.5, scaleY: 1.5,
                    ease: "out",
                });
            }
        }),
        [],
    )

    const socials = [
        {
            icon: mdiLinkedin,
            href: "https://my.indeed.com/p/lokhongk-jm0z5xs",
        },
        {
            icon: mdiGmail,
            href: "mailto:klhong124@gmail.com",
        },
        {
            icon: mdiGithub,
            href: "https://github.com/klhong124",
        },
        {
            icon: mdiWhatsapp,
            href: "https://wa.me/447878154432",
        }
    ]

    const [state, handleSubmit] = useForm("xvolprkr");
    return (
        <div className="min-h-[880px]">
            <div className="pattern bg-blob top-0 " ref={blob}></div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-gray-100 w-screen max-w-3xl mb-10 shadow rounded-xl p-8 sm:p-12 ">
                    <p className="text-3xl font-bold leading-7 text-center">Contact me</p>
                    <form onSubmit={handleSubmit} >
                        <div className="md:flex items-center mt-12 ">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <label className="font-semibold leading-none">Name</label>
                                <input type="text" className=" input" name="name" />

                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                                <label className="font-semibold leading-none">Email</label>
                                <input type="email" className=" input" name="email" />
                            </div>
                        </div>
                        <div className="md:flex items-center mt-8">
                            <div className="w-full flex flex-col">
                                <label className="font-semibold leading-none">Subject</label>
                                <input type="text" className=" input" name="subject" />
                            </div>

                        </div>
                        <div>
                            <div className="w-full flex flex-col mt-8">
                                <label className="font-semibold leading-none">Message</label>
                                <textarea type="text" className="h-40 text-base leading-none input" name="message"></textarea>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full mt-7">
                            {state.submitting
                                ? <div className="flex items-center justify-center ">
                                    <div className="w-8 h-8 border-b-2 border-gray-900 rounded-full animate-spin"></div>
                                </div>
                                :
                                (state.succeeded
                                    ? <div className="font-semibold text-green-600"> "😻 Message sent. Please accept my deepest thanks."</div>
                                    : <button className="button">
                                        Send message
                                    </button>
                                )
                            }
                        </div>
                    </form>
                </div>

                <div className="text-center text-gray-200">
                    <div>

                        {
                            socials.map(({ icon, href }, i) =>
                                <button className="mx-2 "
                                    key={i}
                                    onClick={() => window.open(href)}
                                    data-aos="flip-down"
                                    data-aos-delay={i * 100}
                                    data-aos-duration="200"
                                >
                                    <Icon path={icon}
                                        size={1}
                                        color="white" />
                                </button>
                            )
                        }
                        <div >
                            <small>Ryan Kwan • Full-Stack Developer | UX Designer</small>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
})

export default contact
