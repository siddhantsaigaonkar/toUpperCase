import { useState } from "react";

function TextForm(prop) {
  const handelToUpperCase = () => {
    console.log("udate to upper case");
    SetText(text.toUpperCase());
  };
  const handelToLowerCase = () => {
    SetText(text.toLowerCase());
  };
  const clearText = () => {
    SetText("")
  }
  const textChange = (e) => {
    SetText(e.target.value);
  };

  let [text, SetText] = useState("Enter the text");
  return (
    <>
      <div>
        <h1>{prop.heading}</h1>
        <div className="container mt-3">
          <textarea
            className="form-control"
            value={text}
            rows="6"
            onChange={textChange}
            id="floatingTextarea"
          ></textarea>
        </div>
        <button className="btn btn-primary mt-2 " onClick={handelToUpperCase}>
          Click to UpeerCase
        </button>
        <button
          className="btn btn-primary mt-2  mx-2"
          onClick={handelToLowerCase}
        >
          Click to toLowerCase
        </button>
        <button
          className="btn btn-primary mt-2  mx-2"
          onClick={clearText}
        >
          Click to clear the Text
        </button>
      </div>
      <div className="my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
export default TextForm;
