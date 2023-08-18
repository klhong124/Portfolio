
import React, { useState, useRef, forwardRef, useImperativeHandle, useEffect } from "react";
import RK_IMG from '/public/image/ryankwan.png'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image'
import gsap from "gsap";


const about = forwardRef((_, ref) => {
    const wave = useRef(null)
    // title
    const [title, setTitle] = useState()
    const [subtitle, setSubtitle] = useState()

    const textEffect = (init, target) => {
        var m = {};
        m.codeLetters = () => {
            switch (target) {
                case "title":
                    return "!@#$%^&*()=+<>?";
                case "subtitle":
                    return "RY@>*=/_#$";
                default:
                    return "!@#$%^&*()=+<>?";
            }

        };
        m.current_length = 0;
        m.fadeBuffer = false;
        m.message = init;
        m.render = (text) => {
            switch (target) {
                case "title":
                    setTitle(text)
                    break;
                case "subtitle":
                    setSubtitle(text)
                    break;
                default:
                    return;
            }
        }
        m.generateRandomString = function (length) {
            var random_text = '';
            while (random_text.length < length) {
                random_text += m.codeLetters().charAt(Math.floor(Math.random() * m.codeLetters().length));
            }
            return random_text;
        }
        m.animateIn = function () {
            if (m.current_length < m.message.length) {
                m.current_length = m.current_length + 1;
                if (m.current_length > m.message.length - 5) {
                    m.current_length = m.message.length;
                }

                var message = m.generateRandomString(m.current_length);
                m.render(message)
                setTimeout(m.animateIn, 20);
            } else {
                setTimeout(m.animateFadeBuffer, 20);
            }
        };
        m.animateFadeBuffer = function () {
            if (m.fadeBuffer === false) {
                m.fadeBuffer = [];
                for (var i = 0; i < m.message.length; i++) {
                    m.fadeBuffer.push({ c: (Math.floor(Math.random() * 12)) + 1, l: m.message.charAt(i) });
                }
            }

            var do_cycles = false;
            var message = '';

            for (var i = 0; i < m.fadeBuffer.length; i++) {
                var fader = m.fadeBuffer[i];
                if (fader.c > 0) {
                    do_cycles = true;
                    fader.c--;
                    message += m.codeLetters().charAt(Math.floor(Math.random() * m.codeLetters().length));
                } else {
                    message += fader.l;
                }
            }
            m.render(message)
            if (do_cycles === true) {
                setTimeout(m.animateFadeBuffer, 60);
            }
        };
        m.animateIn()
    }
    useImperativeHandle(
        ref,
        () => ({
            toggleEffect () {
                textEffect("ABOUT ME", "title")
                textEffect("I'm Ryan Kwan.", "subtitle")
            }
        }),
        [],
    )
    useEffect(() => {
        gsap.from(wave.current, { duration: 1.3, y: '-95%', x: -'50%', ease: "in", delay: 0.2 });

    }, []);

    const handleMouseMove = ({ nativeEvent: { clientX, clientY } }) => {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(navigator.userAgent)) {
            let x = ((clientX - (window.innerWidth / 2)) / window.innerWidth * 2).toFixed(2)
            let y = (((window.innerHeight / 2) - clientY) / window.innerHeight * 2).toFixed(2)
            wave.current.style.left = -x * 20 - 50 + "%"
        }
    }

    return (
        <div className="mx-auto h-[852px]" onMouseMove={handleMouseMove}>
            {/* background */}
            <div className="pattern bg-wave-pattern w-[200%] -left-1/2 bottom-0 h-full" ref={wave}></div>

            <div className="container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="mt-12 px-8">
                    <svg className="w-screen max-w-3xl" viewBox="0 0 700 90"><text y="80">{title}</text></svg>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 max-w-[1800px] mx-auto items-center mb-10">
                    <Tilt
                        className="parallax-effect-img mx-10 md:mx-24 lg:mx-16 col-span-3"
                        trackOnWindow={true}
                        tiltReverse={true}
                    >
                        <div className="inner-element">
                            <Image src={RK_IMG} />
                        </div>
                    </Tilt>
                    <div className="  text-white max-w-xl lg:ml-0 mx-8 md:mt-5 col-span-2">
                        <h1 className=" text-2xl sm:text-3xl font-bold overflow-ellipsis overflow-hidden">Greetings, {subtitle}</h1>
                        <h2 className="text-gray-400 mt-1 font-medium">Web Developer | Front-end Specialist | UX Enthusiast</h2>
                        <p className="mt-7">I was born and raised in Hong Kong 🇭🇰 , and currently living in London 🇬🇧 .  </p>
                        <p className="mt-7">My aspiration is to deliver exceptional design solutions to address problems and meet people’s actual needs.  </p>

                        <p className="mt-7">I love programming - a language with superpower! It makes my playful thinking ideas comes alive.   </p>
                        <div className="flex gap-8 mt-7 mb-12 w-auto">
                            <span className="relative">

                                <button className="button " onClick={() => { window.open('https://ryankwan.notion.site/Ryan-Kwan-3c9f5c6b5719484c8c2ad72ac8d94fe7?pvs=4') }}>
                                    LEARN MORE
                                </button>
                                <div className="absolute top-0 right-0 -mr-1 -mt-3 w-4 h-4 rounded-full bg-green-300 animate-ping"></div>
                                <div className="absolute top-0 right-0 -mr-1 -mt-3 w-4 h-4 rounded-full bg-green-300"></div>

                            </span>
                            <button className="button bg-green-800 hover:bg-green-700">
                                <a href="/RyanKwan-CV2023.pdf" download="RyanKwan-cv">Download CV</a>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
})

export default about

