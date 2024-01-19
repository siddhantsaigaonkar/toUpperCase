import { useState } from "react";



function TextForm(params) {

  const handelToUpperCase = () => {
    console.log("udate to upper case");
    SetText(text.toUpperCase())
  }
  const textChange = (e) => {
    SetText(e.target.value)
  }

  let [text,SetText] = useState("Enter the text")
  return (
    <div className="container">
      <div className="container mt-3">
        <textarea
          className="form-control"
          value={text}
          onChange={textChange}
          id="floatingTextarea"
        ></textarea>
       
      </div>
      <button className="btn btn-primary mt-2" onClick={handelToUpperCase}>Click to UpeerCase</button>
    </div>
  ); 
}
export default TextForm