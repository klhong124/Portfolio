
import Script from 'next/script'
import $ from 'jquery';

const pixi = () => {

    return (
        <div onClick={() => { window.spinTheWheel() }}>

            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"
                onLoad={() => {
                    let width = window.innerWidth;
                    let height = window.innerHeight;
                    let width_ref = 450;
                    if (width * 0.3 > 450) {
                        width_ref = 450;
                    } else if (width * 0.3 < 150) {
                        width_ref = 200;
                    } else {
                        width_ref = width * 0.3
                    }
                    // Create the application helper and add its render target to the page
                    let app = new PIXI.Application({ width: width, height: height, transparent: true });
                    document.getElementById('pixi').appendChild(app.view);

                    // set up wheel
                    let wheel = new PIXI.Container();
                    app.stage.addChild(wheel);
                    wheel.position.x = width > 1700 ? 550 : 50;
                    wheel.position.y = width * 0.3 < 150 ? height - 250 : height / 2;
                    // set up wheel.board
                    wheel.board = PIXI.Sprite.from('/image/pixi/wheel.png');
                    wheel.board.anchor.set(0.5);
                    wheel.board.scale.set((width_ref / 1000) * 0.5);
                    wheel.board.rotation = Math.random() * 2 * Math.PI;

                    wheel.addChild(wheel.board);
                    // set up wheel.pin
                    wheel.pin = PIXI.Sprite.from('/image/pixi/pin.png');
                    wheel.pin.anchor.set(0.5, 0);
                    wheel.pin.scale.set((width_ref / 1000) * 0.5);
                    wheel.addChild(wheel.pin);
                    wheel.pin.y = -(width_ref) * 1.15
                    wheel.pin.rotation = -0.1
                    wheel.spined = false
                    wheel.board.interactive = true

                    // wheel.board.on('mousemove', wheelFollow);
                    // let mouseInWheel = false
                    // wheel.board.on('mouseover', () => {
                    //     mouseInWheel = true
                    // });
                    wheel.spinning = false;
                    wheel.board.on('mouseover', () => { window.spinTheWheel() });
                    window.spinTheWheel = async function () {
                        wheel.spined = true
                        if (!wheel.spinning) {
                            wheel.spinning = true;
                            $('#answer').fadeOut()
                            let frame = 400 + Math.round(Math.random() * 420)
                            let initial_frame = frame
                            let spinning_velocity = 1 / 5
                            while (frame > 100) {
                                let ease = easeOutQuart((initial_frame - frame) / initial_frame)
                                let to_spin = ease * spinning_velocity
                                wheel.board.rotation = wheel.board.rotation + to_spin;
                                let section = (((wheel.board.rotation % (2 * Math.PI)) % (2 * Math.PI / 8)) + 0.825) % 1
                                if (section > 0.7) {
                                    wheel.pin.rotation = -(Math.sin(section - 0.7)) * 2.1
                                } else {
                                    if (frame < 300) {
                                        wheel.pin.rotation = ease > 0.8 ? Math.random() * -ease : -0.1
                                    }
                                }
                                await sleep(12);
                                showResult(Math.floor(((wheel.board.rotation % (2 * Math.PI)) / (2 * Math.PI / 8)) - 0.18))

                                frame--;

                            }
                            wheel.spinning = false;
                            showAnswer(Math.floor(((wheel.board.rotation % (2 * Math.PI)) / (2 * Math.PI / 8)) - 0.18))

                        }

                    }



                    function sleep(ms) {
                        return new Promise(resolve => setTimeout(resolve, ms));
                    }
                    function easeOutQuart(x) {
                        return Math.pow(1 - x, 3);
                    }

                    function showResult(n) {
                        if (n == -1) n = 7
                        const fun_fact = [
                            // 1
                            "Cats or Dogs?",
                            // 2
                            "What is your dream job?",
                            // 3
                            "What are you most passionate about?",
                            // 4
                            "Where do you see yourself in five years?",
                            // 5
                            "The TV show you binge over and over again",
                            // 6
                            "One thing I cannot live without is….",
                            // 7
                            "Can you speak any other languages?",
                            // 8
                            "What was your favourite subject in school",

                        ]
                        $('#number').text(n + 1)
                        $('#fun_fact').text(fun_fact[n])
                    }
                    function showAnswer(n) {
                        if (n == -1) n = 7
                        const fun_fact_answer = [
                            // 1
                            "I adore cats🐱",
                            // 2
                            "2. What is your dream job?",
                            // 3
                            "Building a user-friendly, state-of-the-art, modern website is truly a passion of mine. I love creating playful content and delivering remarkable user experiences to people.",
                            // 4
                            "Working in Metaverse, creating fancy playful contents",
                            // 5
                            "Brooklyn Nine-Nine. I binge-watch it.",
                            // 6
                            "Life without music is…well, dull and boring.",
                            // 7
                            "I can speak Cantonese.",
                            // 8
                            "Math is Fun. It helps me a lot when it comes to programing."
                        ]
                        $('#answer').text(fun_fact_answer[n])
                        $('#answer').fadeIn()

                    }


                    let spinning_velocity = 1 / 140
                    app.ticker.add((delta) => {
                        if (!wheel.spined) {
                            wheel.board.rotation = wheel.board.rotation + spinning_velocity;
                            let section = (((wheel.board.rotation % (2 * Math.PI)) % (2 * Math.PI / 8)) + 0.825) % 1
                            if (section > 0.7) {
                                wheel.pin.rotation = -(Math.sin(section - 0.7)) * 2.1
                            } else {
                                wheel.pin.rotation = 0
                            }

                        }
                    })


                }}
            />

            <div className="container relative mx-auto">

                <svg className="max-w-4xl absolute right-10 top-10" viewBox="0 0 1000 90"><text x="1000" y="80" textAnchor="end">SPIN THE WHEEL</text></svg>
                <div id="number" className="font-mono sm:right-10 right-0  top-[100px] absolute sm:text-[500px] md:text-[700px] text-[400px] opacity-10">?</div>
                <div className="absolute sm:right-10 right-5 sm:top-[250px] top-[150px] max-w-3xl w-screen text-white  text-right" >

                    <div id="fun_fact" className="text-xl sm:text-4xl sm:max-w-2xl max-w-sm">
                        Get a fun fact about me
                    </div>
                    <br />

                    <p id="answer" className="hidden sm:max-w-2xl max-w-sm">ANS</p>
                </div>
            </div>
            <div id="pixi"></div>


        </div>
    );
};

export default pixi;
