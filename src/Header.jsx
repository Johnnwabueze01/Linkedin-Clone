import { useState } from 'react'
import React from 'react';
import App from './App';
import Body from './Body';
import pagelogo from './assets/page-logo..jpg'


function Header(){
    return (
        <header>
            <div className="head">
         <div className="logo">
            <img src={pagelogo} alt="linkedin logo" />
         </div>
        <nav>
            <button href="Page.jsx" className="btn_l">Login</button>
            <button href="#signup" className="btn_s">Sign Up</button>
        </nav>
        </div>
    </header>
    )
  }
  

export default Header;
