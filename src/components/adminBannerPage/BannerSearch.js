import './BannerSearchStyles.css'
import React from 'react'

const BannerSearch = () => {
  return (
    <div className='admin-banner-search-container'>
        <div className='admin-banner-search'>
            <h2>Banner</h2>
            <div className='admin-search-input-btn'>
                <button className='admin-add-banner-btn'>Upload New</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default BannerSearch
