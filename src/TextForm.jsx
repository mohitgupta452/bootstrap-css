import React, { useState } from "react";


export default function TextForm(props) {

  const handleUpClick = () => {
      if (text.trim().length === 0) return;


    console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
}

  const handleLoClick = () => {
      if (text.trim().length === 0) return;

    console.log("Lower case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
    
}

  const handleClearClick = () => {
      if (text.trim().length === 0) return;

    console.log("Lower case was clicked");
    setText('');
    props.showAlert("Text cleared!", "success");

}

const handleCopy = () => {
      if (text.trim().length === 0) return;

    var text = document.getElementById("myTextArea");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copy to clipboard!", "success");

}

const handleExtraSpaces = () => {
      if (text.trim().length === 0) return;

    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Remove extraspaces!", "success");

}

  const handleOnChange = (event) => {
    console.log("Handle on change");
    setText(event.target.value);
  }
  const [text, setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
      <h3>
        {props.heading}
      </h3>
      <div className="mb-3">
        <textarea
          className="form-control my-3"
          id="myTextArea"
          rows={8}
          defaultValue={""}
          value= {text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color: props.mode === 'dark' ? 'white':'#042743'}}
        />
      </div>

      <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick} >Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
      
    </div>
    <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
        <h3> Your text summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Enter something in the textbox to preview"}</p>
    </div>
    </>
  );
}
