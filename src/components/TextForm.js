import React, {useState} from 'react'


export default function TextForm(props) {

    const [text, setText] = useState('');
    // text = "new text";  wrong way to change the state 
    //  setText("new text"); // correct way to change the state

    const handleUpClick=()=>{
        // console.log("Uppecase was clicked"+ text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to upper case!", "success");
    }
    const handleLoClick=()=>{
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lower case!", "success");
    }
    const handleClearClick=()=>{
        
        let newText = "";
        setText(newText);
        props.showAlert("Text area cleared!", "success");
    }
    const handleSortClick=()=>{
        
        let arr = text.split(' ');
        let sortThis = arr.sort();
        let newText = sortThis.join();
        setText(newText);
        props.showAlert("Words sorted!", "success");
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }


    
    return (
        <>
        <div style={{color: props.mode=== 'dark'? 'white':'black'}}>
            <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
            
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode=== 'dark'? '#315388':'white' , color: props.mode=== 'dark'? 'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>convert to uppercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>convert to Lowercase</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleSortClick}>Sort by words</button>
        <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        </div>
        <div className="container" style={{color: props.mode=== 'dark'? 'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.trim().split(/\s+/).filter(Boolean).length} words and {text.length} characters</p>
            <p>{0.008*text.trim().split(/\s+/).filter(Boolean).length} Minutes to read this.</p>
            
            <h2>Preview</h2>
            <p>{text.length>0?text:'nothing to preview here!'}</p>
        </div>
        </>
    )
}
