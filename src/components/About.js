

export default function About(props) {
 //const[myStyle,setMyStyle]=useState({
   // color: 'black',
    //backgroundColor:'white',
   
  //})
  //const[btntext,setBtntext]=useState("Enable Dark mode")
   let myStyle={
    color: props.mode==='dark'?'white':'black',
    backgroundColor: props.mode==='dark'?'rgb(36,74,104)':'white',
    border: '2px solid',
    borderColor: 'white'
   }
   let Bstyle={ color: props.mode==='dark'?'white':'black',
   backgroundColor: props.mode==='dark'?'#042743':'white'}

  return (
    <div className="container">
        <h2 className='my-3' style={{ color: props.mode==='dark'?'white':'black'}}>About us</h2>
      <div className="accordion" id="accordionExample" style={Bstyle}>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>analyse your text.</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count,charecter count,or extra spaces.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong> Free to use.</strong>
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils is a free tool that provides instant charecter count and word count statistics for a given text. TextUtils reports the number of words and charecters,thus it is suitable for writing text with word limit.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <strong>Browser Compatible.</strong>
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        This software works in any web such as chrome,firefox etc.
      </div>
    </div>
  </div>
</div>
</div>
  
  )
}
