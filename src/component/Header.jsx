import logo from '../images/logo.svg'
import menu from '../images/icon-hamburger.svg'
import React, { useEffect, useState } from "react";

const Header = props => {
  return (
    <header>
        <img src={logo}></img>

        <div className='desktop-hero'>
          <a>About</a>
          <a>Services</a>
          <a>Projects</a>
          <button>CONTACT</button>
        </div>
        <button onClick={()=> props.setMobileOpen(mobileOpen => !mobileOpen)}className='mobile-hero'>
            <img src={menu}></img>
        </button>
    </header>
  );
}

export default Header;
