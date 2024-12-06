import { useColorScheme } from "@mui/material";
import { color } from "chart.js/helpers";
import React,{useState,useEffect} from "react"


export default function contact () {

  const myStyle = {
    color:'blue'
  }
  
  const [text, setText] = useState('')

  const handleUperClick = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleLowerClick = (e) => {
  e.preventDefault();
    let newText = text.toLowerCase();
    setText(newText)
  }


  const handleClearClick = (e) => {
    e.preventDefault();
      let newText = '';
      setText(newText)
    }


  const handleOnChange = (event) => {
    setText(event.target.value);
    }
  
    useEffect(() => {
    },[]);

  return (
    <>
    <div className="contact-color">
    <div>
      <center>
        <h2 >
           Text write here
        </h2>
          <textarea className="text" rows="8" value={text} onChange={handleOnChange}></textarea>
          <br/>
          <div className="btn-btn-button">
          <button onClick={handleUperClick}>Capital Text</button>
          <button onClick={handleLowerClick}>Small Text</button>
          <button onClick={handleClearClick}>Clear Text</button>
          </div>
          <br/>
          <div>
            <h3>Type Count Result</h3>
            <p style={myStyle}>{text.length}</p>
            <h5>Text Result</h5>
            <p>{text}</p>
          </div>
          </center>
    </div>
    </div>
    </>
  )
};