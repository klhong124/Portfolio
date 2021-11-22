
import React, { useRef, useState } from "react";
import RK_IMG from '/public/image/ryankwan.png'
import Tilt from 'react-parallax-tilt';

import Image from 'next/image'



const about = () => {
    // title
    const eventBus = require('js-event-bus')();
    const [title, setTitle] = useState()
    const titleEffect = (message) => {
        var m = {};
        m.codeletters = "!@#$%^&*()=+<>?";
        m.current_length = 0;
        m.fadeBuffer = false;
        m.message = message;
        m.generateRandomString = function (length) {
            var random_text = '';
            while (random_text.length < length) {
                random_text += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
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
                setTitle(message)
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
                    message += m.codeletters.charAt(Math.floor(Math.random() * m.codeletters.length));
                } else {
                    message += fader.l;
                }
            }
            setTitle(message)
            if (do_cycles === true) {
                setTimeout(m.animateFadeBuffer, 60);
            }
        };
        m.animateIn()
    }
    eventBus.on("loadAbout", () => {
        titleEffect("ABOUT ME")
    });

    return (
        <div className="container mx-auto">
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
                        <h1 className="text-3xl font-bold">Greetings, I'm Ryan Kwan.</h1>
                        <h2 className="text-gray-400 mt-1 font-medium">Web Developer | UX Designer</h2>
                        <p className="mt-7">I was born and raised in Hong Kong 🇭🇰 , and currently living in London 🇬🇧 .  </p>
                        <p className="mt-7">My aspiration is to deliver exceptional design solutions to address problems and meet people’s actual needs.  </p>

                        <p className="mt-7">I love programing - a language with superpower! It makes my playful thinking ideas comes alive.   </p>
                        <button className="mt-7 x-10 button">
                            SAY HELLO
                        </button>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default about

