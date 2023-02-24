import './BannerSearchStyles.css'
import React from 'react'
import { BsTrash } from 'react-icons/bs'

const BannerSearch = () => {
  return (
    <div className='admin-banner-search-container'>
        <div className='admin-banner-search'>
            <h2>Banner</h2>
            <div className='admin-search-input-btn'>
                <button className='admin-add-banner-btn'>Upload New</button>
            </div>
            <BsTrash size={24} className='admin-banner-logo-trash' /> 
        </div>
        <hr />
    </div>
  )
}

export default BannerSearch
