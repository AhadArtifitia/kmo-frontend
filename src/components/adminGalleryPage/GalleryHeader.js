import './GalleryHeaderStyles.css'
import React from 'react'

const GalleryHeader = ({setAddGalleryModal}) => {
    function popModal() {
        setAddGalleryModal(true)
    }
  return (
    <div className='admin-gallery-search-container'>
        <div className='admin-gallery-search'>
            <h2>Gallery</h2>
            <div className='admin-search-input-btn'>
                <button onClick={popModal} className='admin-add-gallery-btn'>Add Image</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default GalleryHeader
