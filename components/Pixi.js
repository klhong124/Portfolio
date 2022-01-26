
import Script from 'next/script'

const pixi = () => {

    return (
        <>
            <Script
                src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/5.1.3/pixi.min.js"
                onLoad={() => {
                    let width = window.innerWidth;
                    let height = window.innerHeight;
                    // Create the application helper and add its render target to the page
                    let app = new PIXI.Application({ width: width, height: height, transparent: true });
                    document.getElementById('pixi').appendChild(app.view);

                    // set up wheel
                    let wheel = new PIXI.Container();
                    wheel.position.x = 50;
                    wheel.position.y = height / 2;
                    app.stage.addChild(wheel);
                    // set up wheel.board
                    wheel.board = PIXI.Sprite.from('/image/pixi/wheel.jpg');
                    wheel.board.anchor.set(0.5);
                    wheel.addChild(wheel.board);
                    // set up wheel.pin
                    wheel.pin = PIXI.Sprite.from('/image/pixi/pin.png');
                    wheel.pin.anchor.set(0.5);
                    wheel.addChild(wheel.pin);
                    wheel.pin.x = -10
                    wheel.pin.y = -300

                    // set up text
                    let text = new PIXI.Text('This is a PixiJS text', { fontFamily: 'Arial', fontSize: 24, fill: 0xff1010, align: 'center' });
                    wheel.addChild(text);


                    app.ticker.add((delta) => {
                        wheel.board.rotation = wheel.board.rotation + delta * 0.01;
                    })


                }}
            />

            <svg className="max-w-3xl absolute right-10 top-10" viewBox="0 0 600 90"><text x="600" y="80" text-anchor="end">FUN FACT</text></svg>
            <div id="pixi">

            </div>
        </>
    );
};

export default pixi;
