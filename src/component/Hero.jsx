import React from 'react'
import hero from '../images/mobile/image-header.jpg'
import arrowdown from '../images/icon-arrow-down.svg'

const Hero = () => {
  return (
    <div className='hero'>
        <h1>WE ARE CREATIVES</h1>
        <img src={arrowdown}></img>
    </div>
  )
}

export default Hero
