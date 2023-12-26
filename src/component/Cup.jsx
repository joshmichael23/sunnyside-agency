import React from 'react'
import cup from '../images/mobile/image-stand-out.jpg'
import cupDesktop from '../images/desktop/image-stand-out.jpg'

const Cup = () => {
  return (
    <div className='cup'>

      <img className='mobile-hero' src={cup}></img>
      <img className='desktop-hero' src={cupDesktop}></img>

      <div className="cup content">
          <h2>Stand out to the right audience</h2>
          <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
          <button>Learn more</button>
      </div>
    </div>
  )
}

 

export default Cup
