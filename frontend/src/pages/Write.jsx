import React ,{useState}from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import closeIcon from '../imgs/close.png';


const Write = () => {
  const [value,setValue]=useState('');


  console.log(value);

  return (
    <div className="create">
      <div className="content">
        <input type="text" placeholder='Title'/>
        <div className="writerContainer">
          <ReactQuill className="writer" theme='snow' value={value} onChange={setValue}/>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> Draft
          </span>
          <span>
            <b>Visibility:</b> public
          </span>
          <label htmlFor="image">Upload Blog Image</label>
          <input type="file" id="image"  style={{display:"none"}}/>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Tags</h1>
          <span className='tagInputContainer'>
            <input type="text" id="tags"/>
            <button>Add</button>
          </span>
          <div className="tags">
            <span className="tag">
              <span>Hello There</span>
              <img src={closeIcon} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write