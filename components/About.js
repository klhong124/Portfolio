
import React, { useState, forwardRef, useImperativeHandle } from "react";
import RK_IMG from '/public/image/ryankwan.png'
import Tilt from 'react-parallax-tilt';
import Image from 'next/image'


const about = forwardRef((_, ref) => {
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
                if (m.current_length > m.message.length) {
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
            toggleEffect() {
                textEffect("ABOUT US", "title")
                textEffect("Greetings, I'm Ryan Kwan.", "subtitle")
            }
        }),
        [],
    )


    return (
        <div className="container mx-auto  py-12 sm:py-0">
            <div>
                <div className="pb-4 px-8">
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
                        <h1 className=" text-2xl sm:text-3xl font-bold">{subtitle}</h1>
                        <h2 className="text-gray-400 mt-1 font-medium">Full-Stack Developer | UX Designer</h2>
                        <p className="mt-7">I was born and raised in Hong Kong 🇭🇰 , and currently living in London 🇬🇧 .  </p>
                        <p className="mt-7">My aspiration is to deliver exceptional design solutions to address problems and meet people’s actual needs.  </p>

                        <p className="mt-7">I love programing - a language with superpower! It makes my playful thinking ideas comes alive.   </p>
                        <div className="mt-7">
                            <span className="relative w-auto">
                                <button className="button" onClick={() => { window.open('https://legend-cairnsmore-8a2.notion.site/Ryan-Kwan-3c9f5c6b5719484c8c2ad72ac8d94fe7') }}>
                                    LEARN MORE
                                </button>
                                <div class="absolute top-0 right-0 -mr-1 -mt-3 w-4 h-4 rounded-full bg-green-300 animate-ping"></div>
                                <div class="absolute top-0 right-0 -mr-1 -mt-3 w-4 h-4 rounded-full bg-green-300"></div>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
})

export default about

