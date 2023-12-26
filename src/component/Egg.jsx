import React from 'react'
import mobileEgg from '../images/mobile/image-transform.jpg'
import desktopEgg from '../images/desktop/image-transform.jpg'


const Egg = () => {
  return (
    <div className='egg'>
      <img className='mobile-hero'  src={mobileEgg}></img>
      <img className='desktop-hero' src={desktopEgg}></img>
      <div className="egg content">
          <h2><span>Transform your</span> brand</h2>
          <p>We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you. </p>
          <button>Learn more</button>
      </div>
    </div>
  )
}

export default Egg
