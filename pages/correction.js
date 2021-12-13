import React, { useEffect, useRef, useState } from "react";
import $ from 'jquery';



const index = () => {
    const [text,setText] = useState(null)
    useEffect(() => {
        setText(text.replace("realy","really"))
    }, [textarea]);


    return (
        <div>
            <Head>
                <title>{meta.title}</title>
            </Head>


            <div className="dark bg-crayola">
                <textarea value={text}></textarea>
            </div>
        </div>

    )
}

export default index

