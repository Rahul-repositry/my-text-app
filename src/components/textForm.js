import React, { useState } from "react";


export default function TextForm(prop) {

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        prop.showAlert('Converted into Uppercase', 'success')
    }

    const handleOnChange = (e) => {
        setText(e.target.value)
    }
    const handleUpInvert = () => {
        let newText = text.split('').reverse().join('')
        setText(newText);
        prop.showAlert('Input is reversed', 'success')
    }

    const [text, setText] = useState('');
    // text = "new Text"; // wrong way to change the text
    // setText("new text"); // Correct way to change the text
    return (
        <>
            <h1>Write your views</h1>
            <div className="form-floating">
                <textarea className="form-control" value={text} style={{
                    background: prop.mode === 'dark' ? '#fcfcfc1a' : 'white',
                    border: prop.mode === 'dark' ? 'none' : '1px solid #cccccc',
                    color: prop.mode === 'dark' ? 'white' : 'black'
                }} onChange={handleOnChange} placeholder="Leave a comment here" id="floatingTextarea" >
                </textarea>
                <label htmlFor="floatingTextarea">Comments</label>
                <button className="btn btn-primary my-3" onClick={handleUpClick} >Convert to Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={handleUpInvert} >Invert all words</button>
            </div>

        </>
    )
} 