import './CareerSearchStyles.css'
import React from 'react'

const CareerSearch = () => {
  return (
    <div className='admin-career-search-container'>
        <div className='admin-career-search'>
            <h2>Career</h2>
            <div className='admin-search-input-btn'>
                <button className='admin-add-career-btn'>Add Career</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default CareerSearch
