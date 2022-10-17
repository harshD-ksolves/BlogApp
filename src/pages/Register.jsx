import React from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input
          required
          type="text"
          placeholder="username"
          name="username"
        />
        <input
          required
          type="email"
          placeholder="abcd@gmail.com"
          name="email"
        />
        <input
          required
          type="password"
          placeholder="password"
          name="password"
        />
        <button>Login</button>
        <p>This is an error!</p>
        <span>Already have an account?  
          <Link to="/Login">Signin</Link> 
        </  span>
      </form>
    </div>
  )
}

export default Register