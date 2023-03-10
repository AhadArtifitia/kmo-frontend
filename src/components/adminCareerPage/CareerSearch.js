import './CareerSearchStyles.css'
import React from 'react'

const CareerSearch = ({setAddCareerModal}) => {
  function popModal() {
    setAddCareerModal(true)
  }
  return (
    <div className='admin-career-search-container'>
        <div className='admin-career-search'>
            <h2>Career</h2>
            <div className='admin-search-input-btn'>
                <button onClick={popModal} className='admin-add-career-btn'>Add Career</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default CareerSearch
