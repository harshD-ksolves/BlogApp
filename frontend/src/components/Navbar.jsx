import React from 'react'
import { Link } from 'react-router-dom';
import  Logo  from '../imgs/harsh.png';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="links">
          <Link className="link" to="/">
            <h6>Home</h6>
          </Link>
          <Link className="link" to="/myblogs">
            <h6>My Blogs</h6>
          </Link>
          <Link className="link" to="/?cat=1">
            <h6>category 1</h6>
          </Link>
          <Link className="link" to="/?cat=2">
            <h6>category 2</h6>
          </Link>
          <span>Harsh</span>
          <span>Logout</span>
          <span>
            <Link className="write link" to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar