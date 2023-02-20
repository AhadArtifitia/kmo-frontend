import './BannerImagesStyles.css'
import React from 'react'
import img from '../../images/cover.png'

const BannerImages = () => {
  return (
    <div className='admin-banner-images-container'>
        <div className='admin-banner-images'>
            <img src={img} alt='banner image' />
        </div>      
    </div>
  )
}

export default BannerImages
