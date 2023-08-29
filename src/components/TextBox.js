import React,{useState} from 'react'

export default function TextBox(props) {
  const handleUpClick =()=>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Text coverted to upper case","success")
  }
  const handleLoClick =()=>{
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Text coverted to lower case","success")
  }
  const handleClearClick =()=>{
    let newText = '';
    setText(newText)
    props.showAlert("Text cleared","success")
  }
  const handleCopy =()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipbored","success")
  }
  const handleExtraSpace =()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed","success")
  }



  const handleOnChange =(event)=>{
    setText(event.target.value)
  }

  const[text ,setText] = useState("");

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3"> 
        <textarea className="form-control" id="mybox" rows="6" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color: props.mode==='dark'?'white':'black'}} ></textarea>
      </div>
      <button disabled={text.length===0} type="button" className="btn btn-secondary mx-1 my-1"onClick={handleUpClick}>Convert to uppcase</button>
      <button disabled={text.length===0} type="button" className="btn btn-secondary mx-1 my-1"onClick={handleLoClick}>Convert to lowercase</button>
      <button disabled={text.length===0} type="button" className="btn btn-secondary mx-1 my-1"onClick={handleClearClick}>Clear text</button>
      <button disabled={text.length===0} type="button" className="btn btn-secondary mx-1 my-1"onClick={handleCopy}>Copy text</button>
      <button disabled={text.length===0} type="button" className="btn btn-secondary mx-1 my-1"onClick={handleExtraSpace}>Remove extra spaces</button>
      
      
  
    </div>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}} my-2 >
      <h2>Your text summery</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}minutes to read</p>
      <h3>preview</h3>
      <p>{text.length>0?text:"Nothing to preview!!!"}</p>
    </div>
    </>
  )
}
