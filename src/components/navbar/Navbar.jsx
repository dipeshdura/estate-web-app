import React, { useState } from 'react'
import './navbar.scss';
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const avatar ="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp";
  const [open, setOpen]=useState(false);

  const user =true;
  return (
    <nav>
        <div className="left">
          <a href="/" className='logo'>
            <img src={logo} alt={logo} />
            <span>DuraEstate</span>
          </a>
          <Link to="/">Home</Link>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
        </div>
        <div className="right">
          {user ? (
            <>
            <div className="user">
            <img src={avatar} alt={avatar} />
            <span>John Doe</span>
            <Link className="profile" to={`/profile`}>
            <span className="profile-text">
              Profile
              </span>
            <div className="notification">3</div>
            </Link>
          </div>
            </>
          ):(
            <>
            <a href="">Sign in</a>
          <a href="" className='register'>Sign up</a>
            </>
          )}

          <div className="menuIcon">
            <img src={menu} alt={menu} onClick={()=>setOpen((prev)=>!prev)}/>
          </div>
          <div className={open ? "menu active":"menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
          </div>
        </div>
    </nav>
  )
}

export default Navbar