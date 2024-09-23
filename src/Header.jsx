import { useState } from 'react'
import React from 'react';
import App from './App';
import Body from './Body';
import pagelogo from './assets/page-logo..jpg'

// const Header = () => {
  /*  function Header() {
    return (
        <header style={headerStyle}>
            <h1>LinkedIn Clone</h1>
            <nav>
                <a href="#login">Login</a>
                <a href="#signup">Sign Up</a>
            </nav>
        </header>
    )
};*/
function Header(){
    return (
        <header>
            <div className="head">
         <div className="logo">
            <img src={pagelogo} alt="linkedin logo" />
         </div>
        <nav>
            <a href="page.jsx">join now</a>
            <button href="Page.jsx" className="btn_l">Login</button>
            <button href="#signup" className="btn_s">Sign Up</button>
        </nav>
        </div>
    </header>
    )
  }
  

export default Header;
