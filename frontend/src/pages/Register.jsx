import React,{useState} from 'react'
import { Link } from 'react-router-dom'



const Register = () => {

  const initialState = {
    username:"",
    email:"",
    password:"",
  }

  const [inputs,setInputs]=useState(initialState);
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("");

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const validateInputs=()=>{  
    if( inputs.username.length <=3 ){
      console.log(inputs.username.length)
      setError("Provide valid username!");
      return false;
    }
    if(!inputs.email){
      console.log(inputs.email.length);
      setError("Provide valid email address!");
      return false;
    }
    if(!inputs.password){
      setError("Provide password!");
      return false;
    }
    
    setError("");
    return true;
  }

const handleSubmit = (e)=>{
  e.preventDefault();
    if(!validateInputs()){
      return;
    }
    setSuccess("User Registered Successfully!");
    console.log(inputs)
    setInputs(initialState);
}

  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
          value={inputs.username}
          onChange={(e)=>handleChange(e)}
        />
        <input
          required
          type="email"
          placeholder="abcd@gmail.com"
          name="email"
          value={inputs.email}
          onChange={(e)=>handleChange(e)}
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
          value={inputs.password}
          onChange={(e)=>handleChange(e)}
        />
        <button onClick={(e)=>handleSubmit(e)} >Login</button>
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
        <span>Already have an account?  
          <Link to="/Login" className="link" style={{fontWeight:'600',fontSize:'13px',padding:'10px',color:'#3a5ce3'}}>Signin</Link> 
        </  span>
      </form>
    </div>
  )
}

export default Register