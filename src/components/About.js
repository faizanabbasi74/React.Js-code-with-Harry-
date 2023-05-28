import React, { useState } from "react";

export default function About(props) {

    // const [customStyle, setCustomStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white',
    //     borderRadius: 20
    // })

    // const [btnText, setBtnText] = useState('Enable Dark Mode')

    // const toggleStyle = () => {
    //     if (customStyle.color === 'black') {
    //         setCustomStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white',
    //             borderRadius: 20
    //         })
    //         setBtnText('Enable Light Mode')

    //     } else {
    //         setCustomStyle({
    //             color: 'black',
    //             backgroundColor: 'white',
    //             border: '2px solid black',
    //             borderRadius: 20
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }

    
    let customStyle = {
        color: props.mode === 'dark'? 'white':'black',
        backgroundColor : props.mode === 'dark'? 'darkslategray':'white',
    }

    let customStyle2 = {
        color: props.mode === 'dark'? 'white':'black',
        backgroundColor : props.mode === 'dark'? '#359797':'#dacccc7d',
        border :props.mode === 'dark'? '1px solid white':'1px solid black',
    }

    return (
        <div className="container" style={customStyle}>
            <h1 className="my-3"><i>About Us</i></h1>
            <div className="accordion" id="accordionExample" style={customStyle}>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                            style={customStyle2}
                        >
                            <strong>Analyze your text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    > 
                        <div className="accordion-body" style={customStyle2}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                            style={customStyle2}
                        >
                            <strong>Free to use</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={customStyle2}>
                            TextUtils is a free character counter tool that proivdes instant character count and word
                            count statistics for a given text. TextUtils reports the number of words and characters.
                            Thus it is suitable for writing text with word / character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                            style={customStyle2}
                        >
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={customStyle2}>
                            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari and Opera.
                            It suits to count characters in facebook, blog, books, excel documents, pdf documents, essays etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    );
}
