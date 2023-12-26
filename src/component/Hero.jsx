import React from 'react'
import hero from '../images/mobile/image-header.jpg'
import arrowdown from '../images/icon-arrow-down.svg'
import Header from './Header'


const Hero = (props) => {
  
  return (

    <div className='hero'>

        
        <div className={(props.mobileOpen ? 'mobile-menu-open open ' : 'mobile-menu-open ') + 'mobile-hero'}>
        <div className='triangle'></div>
          <a>About</a>
          <a>Services</a>
          <a>Projects</a>
          <button>CONTACT</button>
        </div>
        <h1>WE ARE CREATIVES</h1>
        <img src={arrowdown}></img>
    </div>
  )
}

export default Hero
