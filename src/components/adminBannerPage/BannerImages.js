import './BannerImagesStyles.css'
import React from 'react'
import img from '../../images/cover.png'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'


const BannerImages = () => {
  return (
    <div className='admin-banner-images-container'>
        <div className='admin-banner-images'>
            <img src={img} alt='banner image' />
            <div className='admin-banner-details'>
              <div className='admin-banner-details-eye'>
                <AiOutlineEye size={24} className='admin-banner-images-logo' /> 
                <p>112</p>            
              </div>
              <div className='admin-banner-details-heart'>
                <AiOutlineHeart size={24} className='admin-banner-images-logo' />
                <p>15</p>
              </div>
            </div>
        </div>   
    </div>
  )
}

export default BannerImages
