
import Script from 'next/script'
import $ from 'jquery';

const pixi = () => {

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"
                onLoad={() => {
                    let width = window.innerWidth;
                    let height = window.innerHeight;
                    let width_ref = width * 0.3 > 450 ? 450 : width * 0.3
                    // Create the application helper and add its render target to the page
                    let app = new PIXI.Application({ width: width, height: height, transparent: true });
                    document.getElementById('pixi').appendChild(app.view);

                    // set up wheel
                    let wheel = new PIXI.Container();
                    app.stage.addChild(wheel);
                    wheel.position.x = width > 2000 ? 550 : 50;
                    wheel.position.y = height / 2;
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

                    wheel.board.interactive = true

                    // wheel.board.on('mousemove', wheelFollow);
                    // let mouseInWheel = false
                    // wheel.board.on('mouseover', () => {
                    //     mouseInWheel = true
                    // });
                    let spinning = false;
                    wheel.board.on('mouseover', async () => {
                        if (!spinning) {
                            spinning = true;
                            $('#answer').fadeOut()
                            let frame = 200 + Math.round(Math.random() * 420)
                            let initial_frame = frame
                            let spinning_velocity = 1 / 8
                            while (frame > 100) {
                                let ease = easeOutQuart((initial_frame - frame) / initial_frame)
                                let to_spin = ease * spinning_velocity
                                wheel.board.rotation = wheel.board.rotation + to_spin;
                                let section = (((wheel.board.rotation % (2 * Math.PI)) % (2 * Math.PI / 8)) + 0.825) % 1
                                if (section > 0.7) {
                                    wheel.pin.rotation = -(Math.sin(section - 0.7)) * 2.1
                                } else {
                                    wheel.pin.rotation = ease > 0.8 ? Math.random() * -ease : -0.1
                                }
                                await sleep(12);
                                showResult(Math.floor(((wheel.board.rotation % (2 * Math.PI)) / (2 * Math.PI / 8)) - 0.2))

                                frame--;

                            }
                            spinning = false;
                            showAnswer(Math.floor(((wheel.board.rotation % (2 * Math.PI)) / (2 * Math.PI / 8)) - 0.2))

                        }

                    });



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
                            "The TV show you binge over and over again",
                            // 8
                            "The TV show you binge over and over again",

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
                            "6",
                            // 7
                            "7",
                            // 8
                            "8"
                        ]
                        $('#answer').text(fun_fact_answer[n])
                        $('#answer').fadeIn()

                    }



                    // app.ticker.add((delta) => {

                    // })


                }}
            />

            <div className="container relative mx-auto">

                <svg className="max-w-3xl absolute right-10 top-10" viewBox="0 0 600 90"><text x="600" y="80" textAnchor="end">FUN FACT</text></svg>
                <div id="number" className="font-mono right-10  top-[250px] sm:top-[80px] absolute sm:text-[800px] text-[400px] opacity-10"></div>
                <div className="absolute right-10 top-[250px] max-w-3xl text-white  text-right" >

                    <div id="fun_fact" className="text-4xl">
                        SPIN THE WHEEL
                    </div>
                    <br />

                    <p id="answer" className="hidden max-w-2xl">ANS</p>
                </div>
            </div>
            <div id="pixi"></div>


        </>
    );
};

export default pixi;
