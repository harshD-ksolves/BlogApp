import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  const initial={username:'',password:''}
  const [inputs,setInputs]=useState(initial);
  const [error,setError]=useState("");
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
      
      console.log(inputs)
      setInputs(initial);
  }

  return (
    <div className="auth">
      <h1>Login</h1>
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
          type="password"
          placeholder="password"
          name="password"
          value={inputs.password}
          onChange={(e)=>handleChange(e)}
        />
        <button onClick={(e)=>handleSubmit(e)}>Login</button>
        {error && <p className='error'>{error}</p>}
        <span>Don't have account?
          <Link 
            to="/register" 
            className='link' 
            style={{ fontWeight: '600', fontSize: '13px', padding: '5px', color: '#ff0357' }}>

            Signup
          </Link>
        </  span>
      </form>
    </div>
  )
}

export default Login