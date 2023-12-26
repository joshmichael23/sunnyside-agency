import React from 'react'
import gallery1 from '../images/mobile/image-gallery-milkbottles.jpg';
import gallery2 from '../images/mobile/image-gallery-orange.jpg';
import gallery3 from '../images/mobile/image-gallery-cone.jpg';
import gallery4 from '../images/mobile/image-gallery-sugar-cubes.jpg';


import desktop1 from '../images/desktop/image-gallery-milkbottles.jpg';
import desktop2 from '../images/desktop/image-gallery-orange.jpg';
import desktop3 from '../images/desktop/image-gallery-cone.jpg';
import desktop4 from '../images/desktop/image-gallery-sugarcubes.jpg';

const Gallery = () => {
  return (
    <div className='gallery'>
          <img className="mobile-hero" src={gallery1}></img>
          <img className="mobile-hero" src={gallery2}></img>
          <img className="mobile-hero" src={gallery3}></img>
          <img className="mobile-hero" src={gallery4}></img>

          <img className="desktop-hero" src={desktop1}></img>
          <img className="desktop-hero" src={desktop2}></img>
          <img className="desktop-hero" src={desktop3}></img>
          <img className="desktop-hero" src={desktop4}></img>
      
      
    </div>
  )
}

export default Gallery
