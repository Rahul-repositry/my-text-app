import React, { useState } from 'react'

export default function About(prop) {

    // const [style, setstyle] = useState({
    //     color: 'white',
    //     background: '#2f2f2f',
    // })
    // const [btnText, setText] = useState('Enable light mode')
    // const toggleStyle = () => {

    //     document.body.style.background = 'whitesmoke';
    //     document.body.style.color = 'black';
    //     if (style.color === 'white') {
    //         setstyle({
    //             color: 'black',
    //             background: 'whitesmoke',
    //         })
    //         setText('Enable dark mode')
    //     } else {
    //         document.body.style.color = 'white';

    //         document.body.style.background = '#2f2f2f'
    //         setstyle({
    //             color: 'white',
    //             background: '#2f2f2f',
    //         })
    //         setText('Enable light mode');
    //     }
    // }
    let style = {
        background: prop.mode === 'dark' ? '#333a41' : 'white',
        border: prop.mode === 'dark' ? 'none' : '1px solid #cccccc',
        color: prop.mode === 'dark' ? 'white' : 'black'
    }
    return (
        <div className='container'>
            <h1 className="my-3">About-page</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={style}>
                            Accordion Item #1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" style={style}>
                        <div className="accordion-body" >
                            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={style}>
                            Accordion Item #2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" style={style}>
                        <div className="accordion-body" >
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={style}>
                            Accordion Item #3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample" style={style}>
                        <div className="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                    </div>
                </div>
            </div>
            {/* <button type='button' onClick={toggleStyle} className=" btn btn-success my-3">{btnText}</button> */}
        </div>
    )
}
