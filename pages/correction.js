import React, { useState } from "react";

const dictionary = {
    "realy": "really",
    "wried": "weird"
}

const index = () => {
    const [text, setText] = useState("")
    const onChange = (input) => {
        let text = input
        for (const [wrong, right] of Object.entries(dictionary)) {
            text = text.replace(wrong, right)
        }
        setText(text)
    }
    return (
        <div>
            <div className="dark h-screen bg-blue-200">
                <h1>auto correct here: (try "realy" | "wried" )</h1>
                <input value={text} onChange={event => onChange(event.target.value)} />
            </div>
        </div>

    )
}

export default index

