import React from 'react'

const Testimonials = () => {
  return (
    <div className='testimonials'>
      <h4 className='header'>CLIENT TESTIMONIALS</h4>
      <div className='container emily'>
        <div className='profile-pic'></div>
        <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>

        <h5>Emily R.</h5>
        <p>Marketing Director</p>
      </div>

      <div className='container thomas'>
        <div className='profile-pic'></div>
        <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>

        <h5>Thomas S.</h5>
        <p>Chief Operating Officer</p>
      </div>

      <div className='container jennie'>
        <div className='profile-pic'></div>
        <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>

        <h5>Jennie F.</h5>
        <p>Business Owner</p>
      </div>
    </div>
  )
}

export default Testimonials
