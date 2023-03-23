import './BannerImagesStyles.css'
import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'

const BannerImages = ({banners, setBanners}) => {
  const token = localStorage.getItem('token')

  const handleDeleteClick = (objId) => {
    const confirmBox = window.confirm("Confirm to delete this Career?")
    if (confirmBox === true) {
        fetch(`https://backend.kmokoduvally.com/api/admin/banner/${objId}`,{
            method:'DELETE',
            headers:{
                'Authorization':`Bearer ${token}`,
            },
        })
        .then(response => {
            // update table data
            setBanners(prevState => {
                const updatedData = prevState.filter(row => row._id !== objId);
                return updatedData;
            });
        })
        .catch((error) => {
            console.error(error);
        });
    } 
  }

  return (
    <div className='admin-banner-images-container'>
      <Carousel>
        {banners.map((banner, index) => (
          <Carousel.Item>
            <div className='admin-banner-images'>
                <img src={banner.imageUrl} className="admin-banner-images-img" alt='banner image' />
                
                <div className='admin-banner-details'>
                  {/* <div className='admin-banner-details-eye'>
                    <AiOutlineEye size={24} className='admin-banner-images-logo' /> 
                    <p>112</p>            
                  </div> */}
                  {/* <div className='admin-banner-details-heart'>
                    <AiOutlineHeart size={24} className='admin-banner-images-logo' />
                    <p>15</p>
                  </div> */}
                  <div className='admin-banner-details-trash'>
                    <span>Delete</span><BsTrash onClick={() => handleDeleteClick(banner._id)} size={24} className='admin-banner-images-logo-trash' /> 
                  </div>
                  
                </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel> 
    </div>
  )
}

export default BannerImages



            