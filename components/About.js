
import React, { useRef, useState } from "react";
import RK_IMG from '/public/image/ryankwan.png'
import BG_IMG from '/public/image/background.png'
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


    // image
    const [BGimageStyle, setBGImageStyle] = useState({})
    const [RKimageStyle, setRKImageStyle] = useState({})
    const imageRef = useRef(null)


    const handleMouseMove = ({ nativeEvent: { clientX, clientY } }) => {
        let BGx = ((clientX - (window.innerWidth / 2)) / window.innerWidth * 40).toFixed(2)
        let BGy = (((window.innerHeight / 2) - clientY) / window.innerHeight * 40).toFixed(2)
        let originX = (clientX / window.innerWidth * imageRef.current.clientWidth).toFixed(2)
        let originY = (clientY / window.innerHeight * imageRef.current.clientHeight).toFixed(2)
        setBGImageStyle({
            transform: `rotateY(${BGx}deg) rotateX(${BGy}deg)`,
            "transform-origin": `${originX}px ${originY}px;`
        })
        let RKx = ((clientX - (window.innerWidth / 3)) / window.innerWidth * 20).toFixed(2)
        let RKy = (((window.innerHeight / 3) - clientY) / window.innerHeight * 20).toFixed(2)
        setRKImageStyle({
            transform: `rotateY(${RKx}deg) rotateX(${RKy}deg)`,
            "transform-origin": `100px 100px;`

        })
    }



    return (
        <div className="h-screen" onMouseMove={handleMouseMove}>
            <div>
                <div className="about_me p-[4vh] md:p-[8vh]">
                    <svg className="w-screen max-w-7xl -rotate-3" viewBox="0 0 950 90"><text y="80">{title}</text></svg>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1800px] mx-auto items-center">
                    <div className="relative transition-all mx-10 ">
                        <div style={BGimageStyle} className="absolute" ref={imageRef}>
                            <Image src={BG_IMG} />
                        </div>
                        <div style={RKimageStyle} className="pt-2" >
                            <Image src={RK_IMG} />
                        </div>
                    </div>
                    <div className="  text-white md:mr-10 md:ml-0 mx-8 ">
                        <h1> 👋 Hello, I’m Ryan from Hong Kong. Nice to meet you.

                            I have passion for making websites a more modern, usable, and reliable place.

                            I am a Fullstack developer using Nuxt.js and apolloGraphql to create a modern web application. I am a quick learner and hard worker with high academic achievement in an Information Technology Degree and Multimedia Higher Diploma.

                            Enthusiastic to become a skilled person and contribute to the Information Technology Industry. Seeking for an opportunity to contribute to your company and demonstrate all of my technical ability.</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default about

