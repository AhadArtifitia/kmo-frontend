import './GalleryHeroStyles.css'
import img from '../../images/galleryHero.png'
import React from 'react'

const GalleryHero = () => {
  return (
    <div className='gallery-hero'>
        <div className='gallery-mask'>
            <img className='gallery-img' src={img} />
        </div>
        <div className='gallery-content'>
            <h2>Gallery</h2>
        </div>
    </div>
  )
}

export default GalleryHero
