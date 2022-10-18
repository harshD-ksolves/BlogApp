import React ,{useState}from 'react'
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { uploadFile } from '../helpers/firebase';
import closeIcon from '../imgs/close.png';
import uploadIcon from '../imgs/upload.png';

const Write = () => {

  const [title,setTitle]=useState("");
  const [value,setValue]=useState('');
  const [tags,setTags]=useState([]);
  const [tag,setTag]=useState("");
  const [img,setImg]=useState(null);
  const [status,setStatus]=useState("Draft");

  const AddTag=(e)=>{
    e.preventDefault();
    if(tag){
      setTags(tags=>[...tags,tag]);
      setTag("");
    }
  }
  
  const removeTag=(i)=>{
    
    setTags(tags=>tags.filter((tag,index)=> index!==i))
    
  }
  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const image =await uploadFile(img);
    
  }



  return (
    <div className="create">
      <div className="content">
        <input type="text" placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <div className="writerContainer">
          <ReactQuill className="writer" theme='snow' value={value} onChange={setValue}/>
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status:</b> {status}
          </span>
          <label htmlFor="image">
            <img src={uploadIcon} style={{width:'25px'}} alt="uploadIcon"/><span>Upload Blog Image</span> 
          </label>
          <span style={{padding:'3px',marginBottom:'4px',fontWeight:'500',fontSize:'14px'}}>{img?.name}</span>
          <input type="file" id="image" onChange={(e)=>setImg(e.target.files[0])} accept="image/x-png,image/gif,image/jpeg" style={{display:"none"}}/>
          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={(e)=>handleSubmit(e)}>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Tags</h1>
          <span className='tagInputContainer'>
            <input type="text" id="tags" onChange={(e)=>setTag(e.target.value)} value={tag}/>
            <button onClick={(e)=>AddTag(e)}>Add</button>
          </span>
          <div className="tags">
            {
              tags && tags.map((tag,index) => (
                <span className="tag" key={index}>
                  <span>{tag}</span>
                  <img src={closeIcon} alt="" onClick={()=>removeTag(index)} />
                </span>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write