import React, { useState } from "react";

export default function TextForm(props) {

  const [text, setText] = useState("Enter text here");

  const upperCase = () => {
    // console.log("Uppercase button was clicked" +" "+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(' Converted to Uppercase', 'success');
  };

  const lowerCase = () => {
    // console.log("Uppercase button was clicked" +" "+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(' Converted to Lowercase', 'success');
  };

  const handleOnChange = (event) => {
    // console.log("Handle on Changes");
    setText(event.target.value);
  };

  const handleCopy = () => {
    // console.log('I am copy');
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert(' Text copied to clipboard', 'success');
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(' Removed extra spaces', 'success');
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert(' Cleared text', 'success');
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
          backgroundColor: props.mode === "dark" ? "darkslategray" : "white",
        }}
      >
        <h3>
          <i>{props.heading}</i>
        </h3>
        <div>
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            id="myBox"
            rows="6"
            onChange={handleOnChange}
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "#9fbda0" : "white",
            }}
          ></textarea>
        </div>
        <br />
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={upperCase}>
          Convert to Uppercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={lowerCase}>
          Convert to Lowercase
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>
          Remove Extra Spaces
        </button>
        <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <br />
      <div
        className="container2 my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>
          <i>Your text summary</i>
        </h3>
        <p>
          {text.split(" ").filter((element) => { return element.length !== 0 }).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} minutes required to read text</p>
        <h4>
          <i>Preview</i>
        </h4>
        <p>{text.length > 0 ? text : 'Nothing to Preview'}</p>
      </div>
    </>
  );
}
